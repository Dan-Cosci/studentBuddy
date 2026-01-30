import { Router } from "express";
import * as r from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post('/login', r.Login);
authRoutes.post('/register', r.Register);
authRoutes.post('/logout', r.Logout);

authRoutes.post('/forgot-password', (req, res)=>{});
authRoutes.post('/reset-password', (req, res)=>{});
authRoutes.post('/verify-email', (req, res)=>{});

authRoutes.get('/me', (req, res)=>{});

export default authRoutes;