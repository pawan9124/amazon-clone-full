import express from "express";
import Product from "../models/Product.js";
import passport from "passport";
import { v2 } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import multiparty from "multiparty";
import formidable from "formidable";
import keys from "../config/keys.js";

/* Router configuration */
const router = express.Router();

/* Cloudinary configuration */

v2.config({
  cloud_name: keys.cloudinary_cloud_name,
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

var storage = new CloudinaryStorage({
  cloudinary: v2,
  params: {
    folder: (req, file) => {
      console.log("FIRLENAME", file);
      return "amazon-clone";
    },
    format: async (req, file) => {},
    public_id: (req, file) => {
      console.log("PUBLICDID", file);
      return `${file.originalname}-${new Date()}`;
    },
  },
});
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "imageUploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const upload = multer({ storage });

/* 
    @route POST /api/product/create
    @access private
*/

router.post(
  "/create",
  upload.array("image", 6),
  //   passport.authentication("jwt", { session: false }),
  async (req, res) => {
    console.log("REQQQQQq_--------", req.files);
    try {
      let imageArray = [];
      console.log("RE!QfILE----", req.files, req.file);
      if (req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
          imageArray.push({ src: req.files[i].path });
        }
      }
      console.log("imagearr", imageArray);
      const newProduct = { ...req.body, image: imageArray };
      console.log("newProduct", newProduct);
      const saveResponse = await new Product(newProduct).save();
      res.status(201).json(saveResponse);
    } catch (error) {
      console.log("Error", error);
    }
  }
);

export default router;
