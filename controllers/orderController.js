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

    let totalAmount = 0;

    for (const item of cart.products) {
      totalAmount += item.product.price * item.quantity;
    }

    const order = new orderModel({
      user: userId,
      products: cart.products,
      totalAmount,
    });

    await order.save();
    await cartModel.findByIdAndDelete(cart._id);

    res.status(201).json({ order, message: "Order successfully created" });
  } catch (error) {
    next(error);
  }
};

// Get all orders
const get_orders = async (req, res, next) => {
  try {
    const getOrders = await orderModel
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
    const order = await orderModel.findById(id).populate("products.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
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

module.exports = {
  create_order,
  get_orders,
  get_order_by_id,
  update_order_status,
};
