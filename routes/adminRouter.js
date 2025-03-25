const express = require("express");

const adminHandler = require("../middleware/adminHandler");
const {
  create_a_product,
  get_all_products,
  get_a_product,
  update_a_product,
  delete_a_product,
} = require("../controllers/productController");
const {
  create_a_category,
  get_all_categories,
  get_a_category,
  update_a_category,
  delete_a_category,
} = require("../controllers/categoryController");

const {
  get_orders,
  update_order_status,
} = require("../controllers/orderController");

const adminRouter = express
  .Router()
  // Product routes

  .post("/product", adminHandler, create_a_product)
  .get("/products", adminHandler, get_all_products)
  .get("/product/:id", adminHandler, get_a_product)
  .put("/product/:id", adminHandler, update_a_product)
  .delete("/product/:id", adminHandler, delete_a_product)

  // Category routes
  .post("/category", adminHandler, create_a_category)
  .get("/categories", adminHandler, get_all_categories)
  .get("/category/:id", adminHandler, get_a_category)
  .put("/category/:id", adminHandler, update_a_category)
  .delete("/category/:id", adminHandler, delete_a_category)

  .get("/orders", adminHandler, get_orders)
  .put("/order/:id/status", adminHandler, update_order_status);

module.exports = adminRouter;
