import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const authorize = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // get token from HTTP-only cookie
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided, authorization denied",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, config.jwt.secret);
    if (!decoded.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid token payload, authorization denied",
      });
    }

    // Attach user to request
    req.userId = decoded._id;

    next();
  } catch (error) {
    console.error("Authorization middleware error:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
      error: error.message || "An error occurred",
    });
  }
};

export default authorize;
