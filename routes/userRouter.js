// User Router Middleware

const express = require("express");
const { register, login } = require("../controllers/userController");

const userRouter = express
  .Router()
  .post("/user/register", register)
  .post("/user/login", login);

module.exports = userRouter;
