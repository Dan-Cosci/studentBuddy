import mongoose from "mongoose";
import { config } from "./config.js";

const MONGO_URI = `mongodb+srv://${config.mongoose.username}:${config.mongoose.password}@${config.mongoose.host}/${config.mongoose.options}`

const connectDB = async () => await mongoose.connect(MONGO_URI);

export default connectDB;