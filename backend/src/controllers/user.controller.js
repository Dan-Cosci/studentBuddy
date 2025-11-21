import User from "../models/user.model.js"

export const GetUsers = async (req, res, next) => {
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

export const GetUserDetails = async (req, res, next) => {

  const user = await User.findByPk(req.params.id);
  if (!user) { 
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }
  
  if (!req.userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access, user ID not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User details retrieved successfully",
    data: {
      'user':user // The user ID is attached by the authorize middleware
    }
  });
}  