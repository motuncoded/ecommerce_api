const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

// Add item to cart
const add_item_to_cart = async (req, res, next) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    let cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      cart = new cartModel({ user: userId, products: [] });
    }

    const productIndex = cart.products.findIndex(
      (p) => p.product.toString() === productId,
    );

    if (productIndex === -1) {
      cart.products.push({ product: productId, quantity });
    } else {
      cart.products[productIndex].quantity += quantity;
    }

    await cart.save();
    res.status(201).json({ cart, message: "Item added to cart successfully" });
  } catch (error) {
    next(error);
  }
};

// Remove an item from cart
const remove_item_from_cart = async (req, res, next) => {
  const { productId } = req.body;
  const userId = req.user._id;

  try {
    const cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = cart.products.filter(
      (p) => p.product.toString() !== productId,
    );

    await cart.save();
    res
      .status(200)
      .json({ cart, message: "Item removed from cart successfully" });
  } catch (error) {
    next(error);
  }
};

// Clear cart
const clear_cart = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = [];

    await cart.save();
    res
      .status(200)
      .json({ cart, message: "Items in the cart removes successfully" });
  } catch (error) {
    next(error);
  }
};
// Update cart
const update_cart = async (req, res, next) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  try {
    let cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(
      (p) => p.product.toString() === productId,
    );

    if (productIndex === -1) {
      return res
        .status(404)
        .json({ message: "Product not found in this cart" });
    }

    cart.products[productIndex].quantity = quantity;

    await cart.save();
    res.status(200).json({ cart, message: "Cart updated successfully" });
  } catch (error) {
    next(error);
  }
};

// View cart
const view_cart = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const cart = await cartModel
      .findOne({ user: userId })
      .populate("products.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    // Calculate the total amount
    const totalAmount = cart.products.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);

    res
      .status(200)
      .json({ cart, totalAmount, message: "Cart retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add_item_to_cart,
  remove_item_from_cart,
  clear_cart,
  update_cart,
  view_cart,
};
