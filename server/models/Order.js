const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: Number,   
  username: String,
  mobile: String,
  product: String,
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);