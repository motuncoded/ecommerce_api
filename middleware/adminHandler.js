// Authentication Middleware
// Importing Required Modules
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// Defining authHandler Middleware
const adminHandler = async (req, res, next) => {
  const token = req.cookies.token;

  // Checking the Token
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Please log in to continue" });
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
        .json({ message: "User not found. Please register" });
    }
    //    Attaching the Verified User to req
    req.user = user;

    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Not authorized as an admin" });
    }
  } catch (error) {
    //Error Handling
  next(error)

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

module.exports = adminHandler;
