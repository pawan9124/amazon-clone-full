/* Imports of the file */
import express from "express";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import bodyParser from "body-parser";
import cors from "cors";
import keys from "./config/keys.js";
import passportConfig from "./config/passport.js";
import userAuth from "./routes/userAuth.js";
import address from "./routes/address.js";
import payments from "./routes/payments.js";
import products from "./routes/products.js";
import * as io from "socket.io";
import { createServer } from "http";

/* App configuration */
const app = express();
const port = process.env.PORT || 7000;
const server = createServer(app);
const socketio = new io.Server(server, {
  origins: "http://localhost:4000",
});
const __dirname = path.resolve();

/* middlewares */
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(cors());
// app.use(express.static("imageUploads"));

/* Db configuration */
mongoose
  .connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((err, db) => {
    console.log("Mongodb connected");
  })
  .catch((error) => console.log(error));

/* Passport config */
passportConfig(passport);

// /* Cache the resource */
// let setCache = (req, res, next) => {
//   //here you can define period in second, this one is 5 minutes
//   const period = 60 * 5;

//   //cache on the get request
//   if (req.method === "GET") {
//     res.set("Cache-control", `public, max-age=${period}`);
//   } else {
//     res.set("Cache-control", `no-stroe,no-cache,max-age=0`);
//   }

//   next();
// };
// app.use(setCache);

/* API configuration */
app.use("/api/userAuth", userAuth);
app.use("/api/address", address);
app.use("/api/payments", payments);
app.use("/api/products", products);

let socketCopy = {};
/* Socket Io connection */
socketio.of("/api/socket").on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);
  socketCopy = socket;

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

/* Creating an event stream on the database */

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected");

  console.log("Setting change stream");

  const productChangeStream = connection.collection("products").watch();

  productChangeStream.on("change", (change) => {
    console.log("DATA Changed----------_>", change);
    const productData = {
      id: change.fullDocument._id,
      title: change.fullDocument.title,
    };
    socketio.of("/api/socket").emit("productChange", productData);
  });
});

/* Static folder configuration */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// catchall request
app.get("*", (req, res) => {
  res.status(200).send("You hit the api of BOOM !!!!!");
});

/* Listeing to the port */
server.listen(port, () => console.log(`The port is listenting on :${port}`));
