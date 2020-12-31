import express from "express";
import passport from "passport";
import stripe from "stripe";
import Orders from "../models/Orders.js";

/* Router configuration */
const router = express.Router();
const stripeApi = stripe(
  "sk_test_51HxeDPCFRg2ffIwMDz21nQzcXI5AdDIHuPZ6xovTSEE2v6j56sLcBjWllMNQqxbA6j12a3ouudME1XV8qfsN5i8M00GxfmYv1t"
);

/* 
    @route post api/payment/create
    @access private
*/

router.post(
  "/createPaymentIntent",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      const total = req.query.total;
      console.log("Payment request received BOOM !!!===>", total);
      const paymentIntent = await stripeApi.paymentIntents.create({
        amount: total, //subunites of the currency
        currency: "usd",
        description: "Software development stripe test",
        shipping: {
          name: "Pawan Saket",
          address: {
            line1: "510 Townsend St",
            postal_code: "98140",
            city: "San Francisco",
            state: "CA",
            country: "US",
          },
        },
      });

      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

/* 
  @route post api/payment/createOrders
  @access private
*/

router.post(
  "/createOrders",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      const orders = new Orders({
        user: req.body.user,
        paymentId: req.body.paymentId,
        paymentAmount: req.body.paymentAmount,
        orders: req.body.orders,
        created: req.body.created,
        addressId: req.body.addressId,
      });
      orders
        .save()
        .then((response) => {
          res.status(201).json(response);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

/* 
  @ route get/payments/getOrders
  @access private
*/

router.get("/getOrders", (req, res) => {
  try {
    Orders.find({ user: req.query.userId })
      .populate("addressId")
      .then((orders) => res.status(200).json(orders))
      .catch((errors) => res.status(500).json(errors));
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
