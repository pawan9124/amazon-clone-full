import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
});

// ProductSchema.index({
//   title: "text",
//   keywords: "text",
//   seller: "text",
//   storeName: "text",
// });
export default mongoose.model("products", ProductSchema);
