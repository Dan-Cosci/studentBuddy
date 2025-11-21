import { Router } from "express";

import authorize from "../middleware/auth.middleware.js";
import { GetUsers, GetUserDetails } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get('/', authorize ,GetUsers);
userRoutes.get('/:id', authorize ,GetUserDetails);

export default userRoutes;  