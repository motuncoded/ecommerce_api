// Category Router Middleware

const express = require("express");

const {
  create_a_category,
  get_all_categories,
  get_a_category,
  update_a_category,
  delete_a_category,
} = require("../controllers/categoryController");

const categoryRouter = express
  .Router()
  .post("/products", create_a_category)
  .get("/products", get_all_categories)
  .get("/product/:id", get_a_category)
  .put("/product/:id", update_a_category)
  .delete("/product/:id", delete_a_category);

module.exports = categoryRouter;
