const express = require("express");
const router = express.Router();
const adminHandler = require("../middleware/adminMiddleware");
const {
  get_orders,
  update_order_status,
} = require("../controllers/orderController");

router.get("/orders", adminHandler, get_orders);
router.put("/order/:id", adminHandler, update_order_status);

module.exports = router;
