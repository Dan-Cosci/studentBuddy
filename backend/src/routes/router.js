import { Router } from "express";

import authRouter from "./auth.routes.js";
import userRouter from "./users.routes.js";
import noteRouter from "./notes.routes.js";
import notebookRouter from "./notebooks.routes.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/notes', noteRouter);
router.use('/notebooks', notebookRouter);

export default router;