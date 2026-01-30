import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

import User from "../models/user.model.js";

export const Login = async (req, res, next) => {
  try {

    // gets and check for password and email
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // finds user that has the email
    // NOTE: password has select:false in schema
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // checks if password is correct
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // returns a jwt token to be used to access in the database
    const token = jwt.sign(
      { userId: user._id },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        userId: user._id,
        username: user.username,
        email: user.email,
        token
      }
    });

  } catch (error) {
    next(error);
  }
};

export const Register = async (req, res, next) => {
  try {

    // Validate request body
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and username are required"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // returns userid and jwt token
    const token = jwt.sign(
      { userId: newUser._id },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token
      }
    });

  } catch (error) {
    next(error);
  }
};

export const Logout = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Logout route is not implemented yet"
  });
};

export const ForgotPassword = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Forgot Password route is not implemented yet"
  });
};
