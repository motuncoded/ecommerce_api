//Orders Controller

const orderModel = require("../models/orderModel");

// Get all orders
const get_orders = async (req, res, next) => {
  try {
    const getOrders = await orderModel
      .find()
      .populate("user")
      .populate("products.product");
    if (!getOrders) {
      return res.status(404).json({ error: "Orders not found" });
    }
    res
      .status(200)
      .json({ getOrders, message: "Orders retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

// Update order status
const update_order_status = async (req, res,next) => {
  const { id } = req.params;
  try {
    const order = await orderModel.findById(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = req.body.status;
    await order.save();
    res.status(200).json({ order, message: "Order updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get_orders,
  update_order_status,
};
