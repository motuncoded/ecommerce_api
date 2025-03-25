//Orders Controller

const cartModel = require("../models/cartModel");
const orderModel = require("../models/orderModel");

// Create an order
const create_order = async (req, res, next) => {
  const userId = req.user._id;

  try {
    let cart = await cartModel
      .findOne({ user: userId })
      .populate("products.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Calculate the total price of all products in the cart
    let totalPrice = 0;
    cart.products.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });

    const newOrder = new orderModel({
      user: userId,
      products: cart.products.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        status: req.body.status || "pending", // Include status for each product
      })),
      totalPrice, // Include total price
      cart: cart._id, // Include cart details
    });

    await newOrder.save();

    res.status(201).json({ newOrder, message: "Order successfully created" });
  } catch (error) {
    next(error);
  }
};

// Get all orders
const get_orders = async (req, res, next) => {
  try {
    const getOrders = await cartModel
      .find()
      .populate("user")
      .populate("products.product");
    if (!getOrders) {
      return res.status(404).json({ message: "Orders not found" });
    }
    res
      .status(200)
      .json({ getOrders, message: "Orders retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

// get order by id
const get_order_by_id = async (req, res, next) => {
  const { id } = req.params;

  try {
    const getOrder = await orderModel.findById(id).populate("products.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ getOrder, message: "Order retrieved successfully" });
  } catch (error) {
    next(error);
  }
};
// Update order status
const update_order_status = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await orderModel
      .findById(id)
      .populate("user")
      .populate("products.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status;
    await order.save();
    res.status(200).json({ order, message: "Order updated successfully" });
  } catch (error) {
    next(error);
  }
};
const delete_order = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Check if the user has the 'admin' role
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You do not have permission to delete this order" });
    }

    const order = await orderModel.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await orderModel.deleteOne({ _id: id });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create_order,
  get_orders,
  get_order_by_id,
  update_order_status,
  delete_order,
};
