import { Router } from "express";

import * as c from "../controllers/notebook.controller.js";
import authorize from "../middleware/auth.middleware.js";

const notebookRouter = Router();

notebookRouter.get("/", c.getAllNotebooks);
notebookRouter.get("/:userId", authorize, c.getAllUserNotebooks);
notebookRouter.get("/:userId/:notebookId", authorize, c.getNotebookDetails);
notebookRouter.post("/:userId", authorize, c.addNotebook);
notebookRouter.put("/:id", authorize, c.updateNotebook);
notebookRouter.delete("/:id", authorize, c.deleteNotebook);

notebookRouter.post("/bulk", c.bulkAddNotebooks);

export default notebookRouter;
