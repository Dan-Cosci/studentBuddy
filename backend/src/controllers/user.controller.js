import User from "../models/user.model.js"

const GetUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users
    });
  } catch (error) {
    next(error);
  }
}

const GetUserDetails = async (req, res, next) => {}  