import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
    requried: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  paymentAmount: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("orders", OrdersSchema);
