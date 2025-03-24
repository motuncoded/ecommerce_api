const express = require("express");

const {
  add_item_to_cart,
  view_cart,
  remove_item_from_cart,
  update_cart,
  clear_cart,
} = require("../controllers/cartController");
const authHandler = require("../middleware/authHandler");

const cartRouter = express
  .Router()
  .post("/cart/add", authHandler, add_item_to_cart)
  .delete("/cart/remove", authHandler, remove_item_from_cart)
  .delete("/cart/clear", authHandler, clear_cart)
  .put("/cart/update", authHandler, update_cart)
  .get("/carts", authHandler, view_cart);

module.exports = cartRouter;
