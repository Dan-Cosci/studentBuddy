import { Router } from "express";
import { 
  AddNote, 
  GetAllNotes, 
  GetAllUserNotes, 
  GetNoteDetails, 
  updateNote
} from "../controllers/notes.contoller.js";


const notesRouter = Router();

notesRouter.get("/", GetAllNotes);
notesRouter.get("/:userId", GetAllUserNotes);
notesRouter.post("/:userId", AddNote);
notesRouter.get("/:userId/:noteId", GetNoteDetails);
notesRouter.put("/:noteId", updateNote);

notesRouter.delete("/:noteId", (req,res)=>{ 
  res.status(200).json({
    success:true,
    message:"Route not implimented"
  });
});


export default notesRouter;