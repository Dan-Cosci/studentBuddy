import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/i, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // Exclude password from query results by default
  },
  deletedAt:{
    type: Date,
    default: null
  },

  verifcationCode:{
    type: String,
    select: false,
    default: null,
  },
  isEmailVerified:{
    type: Boolean,
    default: false,
  },
  passwordVerificationCode:{
    type: String,
    select: false,
    default: null,
  },
  

},{
  timestamps:true,
  versionKey: false,
});

const User = new mongoose.model('User', userSchema);

export default User;
