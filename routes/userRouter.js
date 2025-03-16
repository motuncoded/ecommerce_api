// User Router Middleware

const express = require("express");
const { register, login } = require("../controllers/userController");
// const authHandler = require("../middleware/authHandler");

const userRouter = express
  .Router()
  .post("/user/register", register)
  .post("/user/login", login);

module.exports = userRouter;
