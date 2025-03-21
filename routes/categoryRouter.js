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
  .post("/category", create_a_category)
  .get("/categories", get_all_categories)
  .get("/category/:id", get_a_category)
  .put("/category/:id", update_a_category)
  .delete("/category/:id", delete_a_category);

module.exports = categoryRouter;
