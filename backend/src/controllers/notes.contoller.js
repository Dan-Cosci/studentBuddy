import Note from "../models/note.model.js";
// import { gemini } from "../config/gemini.js"

export const GetAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      success: true,
      message: "Notes loaded successfully",
      data: notes
    });
  } catch (error) {
    next(error);
  }
};

export const GetAllUserNotes = async (req, res, next) => {
  try {
    const userId = req.userId;
    const notes = await Note.find({ userId });

    res.status(200).json({
      success: true,
      message: "Notes loaded successfully",
      data: notes
    });
  } catch (error) {
    next(error);
  }
};

export const GetNoteDetails = async (req, res, next) => {
  try {
    const { userId, noteId } = req.userId;

    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note Not Found"
      });
    }

    if (note.userId.toString() !== userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, note from different user"
      });
    }

    res.status(200).json({
      success: true,
      message: "Note details loaded",
      data: note
    });
  } catch (error) {
    next(error);
  }
};

export const AddNote = async (req, res, next) => {
  try {
    const { userId } = req.userId;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "content and title fields are required"
      });
    }

    const newNote = await Note.create({
      title,
      content,
      userId
    });

    res.status(200).json({
      success: true,
      message: `Added a new note to UserId: ${userId}`,
      data: newNote
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { noteId } = req.userId;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content fields are required."
      });
    }

    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found."
      });
    }

    if (note.deletedAt) {
      return res.status(400).json({
        success: false,
        message: "Note deleted"
      });
    }

    note.title = title;
    note.content = content;
    await note.save();

    res.status(200).json({
      success: true,
      message: `Updated note with ID: ${noteId}`,
      data: note
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { noteId } = req.userId;

    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found."
      });
    }

    if (note.deletedAt) {
      return res.status(400).json({
        success: false,
        message: "Note already deleted"
      });
    }

    note.deletedAt = new Date();
    await note.save();

    res.status(200).json({
      success: true,
      message: "Note deleted",
      data: note
    });
  } catch (error) {
    next(error);
  }
};

export const summarizeNote = async (req, res) => {
  const greet = await ai("introduce yourself");
  res.status(200).json({
    success: true,
    message: "to be properly implemented",
    data: greet
  });
};
