const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HxeDPCFRg2ffIwMDz21nQzcXI5AdDIHuPZ6xovTSEE2v6j56sLcBjWllMNQqxbA6j12a3ouudME1XV8qfsN5i8M00GxfmYv1t"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received BOOM !!!===>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunites of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//- Listen command run express on cloud function
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });npm i
