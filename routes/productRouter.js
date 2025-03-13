// Products Router Middleware

const express = require("express");
const {
  register,
  login,

} = require("../controllers/userController");
// const authHandler = require("../middleware/authHandler");

const userRouter = express
  .Router()
  .post("/product", register)
  .post("/product", login)


module.exports = userRouter;