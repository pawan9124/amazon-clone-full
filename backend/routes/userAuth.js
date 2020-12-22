import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import keys from "../config/keys.js";
import jwt from "jsonwebtoken";
import passport from "passport";

/* Router configuration */
const router = express.Router();

/* 
    @route post api/userAuth/register
    @access public
*/

router.post("/register", (req, res) => {
  const errors = {};
  console.log("responseherer=--------", req.body);
  try {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        const avatar = "blank_profile.svg";

        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          isSeller: req.body.isSeller,
          avatar: avatar,
          date: Date.now(),
        });

        //Encrypt the password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              console.log(err);
            }
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                res.status(200).json(user);
              })
              .catch((error) => {
                res.status(500).json(error);
                throw new Error(error);
              });
          });
        });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/* 
    @route post api/userAuth/login
    @access public

*/

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = {};
  try {
    //find the user
    User.findOne({ email }).then((user) => {
      if (!user) {
        errors.email = "User not found in the system";
        return res.status(400).json(errors);
      }

      //check the password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            isSeller: user.isSeller,
          };

          //Sign the token
          jwt.sign(
            payload,
            keys.secretKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer" + token,
              });
            }
          );
        } else {
          errors.password = "Incorrect password entered";
          return res.status(400).json(errors);
        }
      });
    });
  } catch (error) {}
});

/* 
  @route GET api/userAuth/current
  @access private
*/
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
    });
  }
);
export default router;
