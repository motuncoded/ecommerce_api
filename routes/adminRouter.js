const express = require("express");

const adminHandler = require("../middleware/adminHandler");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const adminRouter = express
  .Router()
  // Product routes
  .post("/products", adminHandler, createProduct)
  .get("/products", adminHandler, getProducts)
  .get("/products/:id", adminHandler, getProductById)
  .put("/products/:id", adminHandler, updateProduct)
  .delete("/products/:id", adminHandler, deleteProduct)

  // Category routes
  .post("/categories", adminHandler, createCategory)
  .get("/categories", adminHandler, getCategories)
  .get("/categories/:id", adminHandler, getCategoryById)
  .put("/categories/:id", adminHandler, updateCategory)
  .delete("/categories/:id", adminHandler, deleteCategory);

module.exports = adminRouter;
