// Product Controller

const productModel = require("../models/productModel");
const categoryModel = require("../models/categoryModel");

// Create a product
const create_a_product = async (req, res, next) => {
  try {
    const { name, description, price, quantity, category, imageUrl } = req.body;

    // Check if category exists, if not, create it
    let categoryDoc = await categoryModel.findOne({ name: category });
    if (!categoryDoc) {
      categoryDoc = new categoryModel({ name: category });
      await categoryDoc.save();
    }

    const createProduct = new productModel({
      name,
      description,
      price,
      quantity,
      category: categoryDoc._id,
      imageUrl,
    });
    await createProduct.save();
    res
      .status(201)
      .json({ createProduct, message: "Product created successfully" });
  } catch (error) {
    next(error);
  }
};
// Get all products
const get_all_products = async (req, res, next) => {
  try {
    const getProducts = await productModel.find().populate("category");
    if (!getProducts) {
      return res.status(404).json({ error: "Products not found" });
    }
    res
      .status(200)
      .json({ getProducts, message: "Products retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

// to get individual product
const get_a_product = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getProduct = await productModel.findById(id).populate("category");
    if (!getProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(200)
      .json({ getProduct, message: "Product retrieved successfully" });
  } catch (error) {
    next(error);
  }
};
// Update a product by ID
const update_a_product = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, quantity, category, imageUrl } = req.body;

  try {
    // Check if category exists, if not, create it
    let categoryDoc = await categoryModel.findOne({ name: category });
    if (!categoryDoc) {
      categoryDoc = new categoryModel({ name: category });
      await categoryDoc.save();
    }

    const updates = {
      name,
      description,
      price,
      quantity,
      category: categoryDoc._id,
      imageUrl,
    };

    const updateProduct = await productModel
      .findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      })
      .populate("category");

    if (!updateProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res
      .status(200)
      .json({ updateProduct, message: "Product updated successfully" });
  } catch (error) {
    next(error);
  }
};

// Delete a product
const delete_a_product = async (req, res,next) => {
  const { id } = req.params;
  try {
    const deleteProduct = await productModel.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ deleteProduct, message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create_a_product,
  get_all_products,
  get_a_product,
  update_a_product,
  delete_a_product,
};
