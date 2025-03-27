const express = require("express");

const {
  add_item_to_cart,
  view_cart,
  remove_item_from_cart,
  update_cart,
  clear_cart,
} = require("../controllers/cartController");
const { userHandler } = require("../middleware/authHandler");

const cartRouter = express
  .Router()
  .post("/cart/add", userHandler, add_item_to_cart)
  .delete("/cart/remove", userHandler, remove_item_from_cart)
  .delete("/cart/clear", userHandler, clear_cart)
  .put("/cart/update", userHandler, update_cart)
  .get("/carts", userHandler, view_cart);

module.exports = cartRouter;
