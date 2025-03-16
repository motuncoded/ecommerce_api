// Product Controller

const productModel = require("../models/productModel");

// Create a product
const create_a_product = async (req, res, next) => {
  try {
    const createProduct = new productModel(req.body);
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
  const { id } = req.params.id;
  try {
    const getProduct = await Product.findById(id).populate("category");
    if (!getProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(201)
      .json({ getProduct, message: "Product retrieved successfully" });
  } catch (error) {
    next(error);
  }
};
// Update a product by ID
const update_a_product = async (req, res) => {
  const { id } = req.params.id;
  const updates = req.body;

  try {
    const updateProduct = await productModel
      .findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      })
      .populate("category");
    if (!updateProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ updateProduct, message: "Product retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

// Delete a product
const delete_a_product = async (req, res) => {
  const { id } = req.params.id;
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
