import { Router } from "express";

import authorize from "../middleware/auth.middleware.js";
import { GetUsers, GetUserDetails } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', authorize ,GetUsers);
userRouter.get('/:id', authorize ,GetUserDetails);

export default userRouter;  