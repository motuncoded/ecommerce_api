// User Router Middleware

const express = require("express");
const { register, login, logout } = require("../controllers/userController");

const userRouter = express
  .Router()
  .post("/user/register", register)
  .post("/user/login", login)
  .post("/user/logout", logout);

module.exports = userRouter;
