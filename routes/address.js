import express from "express";
import Address from "../models/Address.js";
import passport from "passport";

/* Router configuration */
const router = express.Router();

/* 
    @route post api/address/create
    @access private
*/

router.post(
  "/create",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    console.log("responseherer=--------", req.body);
    try {
      const address = new Address({
        user: req.body.user,
        country: req.body.country,
        state: req.body.state,
        phone: req.body.phone,
        area: req.body.area,
        city: req.body.city,
        landmark: req.body.landmark,
      });
      address
        .save()
        .then((addressDoc) => {
          res.status(200).json(addressDoc);
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
  @route get api/address/get
  @access private
*/

router.get(
  "/get",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("REQUEST----------------", req.query);
    try {
      Address.find({ user: req.query.userId })
        .then((address) => {
          res.status(200).json(address);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

export default router;
