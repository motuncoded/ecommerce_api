// Order Router Middlerware


const express = require("express");
const adminHandler = require("../middleware/adminHandler");
const {
  get_orders,
  update_order_status,
} = require("../controllers/orderController");


const orderRouter = express
  .Router()
  .get("/orders", adminHandler, get_orders)
  .put("/order/:id", adminHandler, update_order_status);

module.exports = orderRouter;
