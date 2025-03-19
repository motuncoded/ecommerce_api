const express = require('express');

const { add_item_to_cart, view_cart, remove_item_from_cart } = require('../controllers/cartController');
const authHandler = require("../middleware/authHandler");

const cartRouter = express
.Router()
.post('/add', authHandler, add_item_to_cart)
.post('/remove', authHandler, remove_item_from_cart)
.get('/', authHandler, view_cart);

module.exports = cartRouter;