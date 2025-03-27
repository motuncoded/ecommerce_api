// Order Router Middlerware

const express = require("express");
const { userHandler } = require("../middleware/authHandler");
const {
  create_order,
  get_orders,
  get_order_by_id,
} = require("../controllers/orderController");

const orderRouter = express
  .Router()
  .post("/order", userHandler, create_order)
  .get("/order", userHandler, get_orders)
  .get("/order/:id", userHandler, get_order_by_id);

module.exports = orderRouter;
