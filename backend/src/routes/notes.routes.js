import { Router } from "express";
import { 
  AddNote, 
  GetAllNotes, 
  GetAllUserNotes, 
  GetNoteDetails 
} from "../controllers/notes.contoller.js";


const notesRouter = Router();

notesRouter.get("/", GetAllNotes);
notesRouter.get("/:userId", GetAllUserNotes);
notesRouter.post("/:userId", AddNote);
notesRouter.get("/:userid/:noteId", GetNoteDetails)


export default notesRouter;