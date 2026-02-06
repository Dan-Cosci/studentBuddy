import { Router } from "express";
import { 
  AddNote, 
  deleteNote, 
  GetAllNotes, 
  GetAllUserNotes, 
  GetNoteDetails, 
  summarizeNote, 
  updateNote,
  bulkAddNotes
} from "../controllers/notes.contoller.js";
import authorize from "../middleware/auth.middleware.js";


const notesRouter = Router();

notesRouter.get("/", GetAllNotes);
notesRouter.get("/ai", summarizeNote);

notesRouter.get("/:userId", authorize ,GetAllUserNotes);

// dev
notesRouter.post("/bulk", bulkAddNotes);

notesRouter.post("/:userId", authorize, AddNote);
notesRouter.get("/:userId/:noteId", authorize, GetNoteDetails);
notesRouter.put("/:noteId", authorize, updateNote);
notesRouter.delete("/:noteId", authorize, deleteNote);


export default notesRouter;