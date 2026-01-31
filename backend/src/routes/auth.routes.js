import { Router } from "express";
import * as r from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post('/login', r.Login);
authRoutes.post('/register', r.Register);
authRoutes.post('/logout', r.Logout);

authRoutes.post('/reset-password', r.ResetPassword);

authRoutes.get('/me', r.Me);

export default authRoutes;