const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ6OXCp5CleaAUqE5MBZ2uQz171oGxyTBJmANCDjiIcs7xMj1snWGmn99OvdYZilsqX7uHPzq5CC2SLiRIeVXj900lnZlEemk"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/amazon/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(`Payment Request Received ${total}`);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Example endpoint
//http://localhost:5001/clone-46b75/us-central1/api
