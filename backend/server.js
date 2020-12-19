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

/* App configuration */
const app = express();
const port = process.env.PORT || 4000;

/* middlewares */
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(cors());

/* Db configuration */
mongoose
  .connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

/* Passport config */
passportConfig(passport);

/* Cache the resource */
let setCache = (req, res, next) => {
  //here you can define period in second, this one is 5 minutes
  const period = 60 * 5;

  //cache on the get request
  if (req.method === "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    res.set("Cache-control", `no-stroe,no-cache,max-age=0`);
  }

  next();
};
app.use(setCache);

/* API configuration */
app.use("/api/userAuth", userAuth);

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
app.listen(port, () => console.log(`The port is listenting on :${port}`));
