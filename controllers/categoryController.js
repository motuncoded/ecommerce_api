const categoryModel = require("../models/categoryModel");

// Create a new category
const create_a_category = async (req, res, next) => {
  try {
    const createCategory = new categoryModel(req.body);
    await category.save();
    res
      .status(201)
      .json({ createCategory, message: "Category created successfully" });
  } catch (error) {
    next(error);
  }
};

// Get all categories
const get_all_categories = async (req, res, next) => {
  try {
    const getCategories = await categoryModel.find();
    if (!getCategories) {
      return res.status(404).json({ message: "Categories not found" });
    }
    res
      .status(200)
      .json({ getCategories, message: "Categories retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

// Get a single category by ID
const get_a_category = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCategory = await categoryModel.findById(id);
    if (!getCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res
      .status(200)
      .json({ getCategory, message: "Category retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

// Update a category by ID
const update_a_category = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updateCategory = await categoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res
      .status(200)
      .json({ updateCategory, message: "Category updated successfully" });
  } catch (error) {
    next(error);
  }
};

// Delete a category by ID
const delete_a_category = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteCategory = await categoryModel.findByIdAndDelete(id);
    if (!deleteCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({ deleteCategory, message: "Category deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create_a_category,
  get_all_categories,
  get_a_category,
  update_a_category,
  delete_a_category,
};
