const express = require("express");

const { userHandler, adminHandler } = require("../middleware/authHandler");
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
  delete_order,
} = require("../controllers/orderController");

const adminRouter = express
  .Router()

  // Product routes
  .post("/product", userHandler, adminHandler, create_a_product)
  .get("/products", userHandler, adminHandler, get_all_products)
  .get("/product/:id", userHandler, adminHandler, get_a_product)
  .put("/product/:id", userHandler, adminHandler, update_a_product)
  .delete("/product/:id", userHandler, adminHandler, delete_a_product)

  // Category routes
  .post("/category", userHandler, adminHandler, create_a_category)
  .get("/categories", userHandler, adminHandler, get_all_categories)
  .get("/category/:id", userHandler, adminHandler, get_a_category)
  .put("/category/:id", userHandler, adminHandler, update_a_category)
  .delete("/category/:id", userHandler, adminHandler, delete_a_category)

  //Order routes
  .get("/orders", userHandler, adminHandler, get_orders)
  .put("/order/:id/status", userHandler, adminHandler, update_order_status)
  .delete("/order/:id", userHandler, adminHandler, delete_order);

module.exports = adminRouter;
