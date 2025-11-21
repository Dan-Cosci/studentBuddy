import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/config.js"; // Ensure you have the correct path to your config file
import User from "../models/user.model.js"; // Ensure you have the correct path to your User model


// Middleware to authorize user based on JWT token
const authorize = async (req, res, next) => {
  try {
    
    // Check if the request has an authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: "No token provided, authorization denied"
      });
    }

    // Extract token from the authorization header
    let token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided, authorization denied"
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded || !decoded.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, authorization denied"
      });
    }

    // Find the user by ID from the decoded token
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found, authorization denied"
      });
    }

    // Attach user to the request object for further use in the route handlers
    req.userId = user.id; // Attach user ID to request object
    next();

  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized access",
      error: error.message || "An error occurred"
    });
  }
};

export default authorize;