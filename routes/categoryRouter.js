// Category Router Middleware

const express = require("express");

const {
  get_all_categories,
  get_a_category,
} = require("../controllers/categoryController");

const categoryRouter = express
  .Router()

  .get("/categories", get_all_categories)
  .get("/category/:id", get_a_category);

module.exports = categoryRouter;
