// Products Router Middleware

const express = require("express");

const {
  create_a_product,
  get_all_products,
  get_a_product,
  update_a_product,
  delete_a_product,
} = require("../controllers/productController");

const productRouter = express
  .Router()
  .post("/product", create_a_product)
  .get("/products", get_all_products)
  .get("/product/:id", get_a_product)
  .put("/product/:id", update_a_product)
  .delete("/product/:id", delete_a_product);

module.exports = productRouter;
