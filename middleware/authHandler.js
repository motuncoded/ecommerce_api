// Authentication Middleware
// Importing Required Modules
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// Defining authHandler Middleware
const userHandler = async (req, res, next) => {
  const token = req.cookies.token;

  // Checking the Token
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Access denied. Please log in to continue" });
  }
  try {
    //   Verifying the Token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //to verify that token in cookies matches our created token
    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    //   Finding the User in the Database
    const user = await userModel.findById(decodedToken.id).select("-password"); //to find a userid that matches the token id
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found. Please register or login" });
    }
    //    Attaching the Verified User to req
    req.user = user; //passing the verified user to the ongoing request
    next();
  } catch (error) {
    //Error Handling
    console.error("Authentication Error:", error);

    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token has expired. Please log in again." });
    }

    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};
const adminHandler = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Access denied, please register as an admin" });
  }
};
module.exports = { userHandler, adminHandler };
