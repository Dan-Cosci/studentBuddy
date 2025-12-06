import { Router } from "express";
import { 
  AddNote, 
  deleteNote, 
  GetAllNotes, 
  GetAllUserNotes, 
  GetNoteDetails, 
  summarizeNote, 
  updateNote
} from "../controllers/notes.contoller.js";


const notesRouter = Router();

notesRouter.get("/", GetAllNotes);
notesRouter.get("/ai", summarizeNote);

notesRouter.get("/:userId", GetAllUserNotes);
notesRouter.post("/:userId", AddNote);
notesRouter.get("/:userId/:noteId", GetNoteDetails);
notesRouter.put("/:noteId", updateNote);
notesRouter.delete("/:noteId", deleteNote);


export default notesRouter;