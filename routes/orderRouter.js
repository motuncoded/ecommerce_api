// Order Router Middlerware

const express = require("express");
const authHandler = require("../middleware/authHandler");
const {
  create_order,
  get_orders,
  get_order_by_id,
} = require("../controllers/orderController");

const orderRouter = express
  .Router()
  .post("/order", authHandler, create_order)
  .get("/order", authHandler, get_orders)
  .get("/order/:id", authHandler, get_order_by_id);

module.exports = orderRouter;
