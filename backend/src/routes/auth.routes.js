import { Router } from "express";
import { 
  Login, 
  Logout, 
  Register 
} from "../controllers/auth.controller.js";


const authRoutes = Router();

authRoutes.post('/login', Login);
authRoutes.post('/register', Register);
authRoutes.post('/logout', Logout);

export default authRoutes;