const mongoose = require("mongoose");

const cartModel = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("cart", cartModel);
