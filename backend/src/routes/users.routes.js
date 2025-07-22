import { Router } from "express";

const userRoutes = Router();

userRoutes.get('/', GetUsers);
userRoutes.get('/:id', GetUserDetails);

export default userRoutes;