// Products Router Middleware

const express = require("express");

const {
  get_all_products,
  get_a_product,
} = require("../controllers/productController");

const productRouter = express
  .Router()

  .get("/products", get_all_products)
  .get("/product/:id", get_a_product);

module.exports = productRouter;
