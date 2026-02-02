import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/user.model.js";
import { config } from '../config/config.js';

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

    res.cookie('token', 
      token, 
      { 
        httpOnly: true, 
        secure: config.env === 'production',
        sameSite: config.env === 'production' ? 'none' : 'strict',
        path:'/'
      });

    res.status(200).json({
      success: true,
      message: "Login successful",
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
      password: hashedPassword,
    });


    // returns userid and jwt token
    const token = jwt.sign(
      { userId: newUser._id },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    res.cookie('token',token,{
      httpOnly: true, 
      secure: config.env === 'production',
      sameSite: config.env === 'production' ? 'none' : 'strict',
      path:'/'
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {
    next(error);
  }
};

export const Logout = async (req, res) => {
  res.clearCookie('token',{
    httpOnly: true, 
    secure: config.env === 'production',
    sameSite: config.env === 'production' ? 'none' : 'strict',
    path:'/'
  });

  res.status(200).json({
    success: true,
    message: "Logout successful"
  });
};

export const ResetPassword = async (req, res, next) => {
  try {
    const { email, password, newPassword } = req.body;
    if (!email || !password || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email, current password, and new password are required"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid current password"
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    
    res.status(200).json({
      success: true,
      message: "Password reset successfully"
    });

  } catch (error) {
    next(error)
  }
};

export const Me = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  const decoded = jwt.verify(token, config.jwt.secret)

  try {
    const u = await User.findById(decoded.userId);
    if (!u) return res.status(404).json({ success: false, message: "User not found" });
    
    res.status(200).json({ success: true, user: u });
  } catch (error) {
    next(error)
  }
};

