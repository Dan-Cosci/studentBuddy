import Note from "../models/note.model.js";

export const GetAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ deletedAt: null });

    res.status(200).json({
      success: true,
      message: "Notes loaded successfully",
      notes: notes
    });
  } catch (error) {
    next(error);
  }
};

export const GetAllUserNotes = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const notes = await Note.find({
      userId,
      deletedAt: null
    });

    res.status(200).json({
      success: true,
      message: "User notes loaded successfully",
      notes: notes
    });
  } catch (error) {
    next(error);
  }
};

export const GetNoteDetails = async (req, res, next) => {
  try {
    const { userId, noteId } = req.params;

    const note = await Note.findById(noteId);
    if (!note || note.deletedAt) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }

    if (note.userId.toString() !== userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }

    res.status(200).json({
      success: true,
      message: "Note details loaded",
      note: note
    });
  } catch (error) {
    next(error);
  }
};

export const AddNote = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required"
      });
    }

    const newNote = await Note.create({
      title,
      content,
      userId
    });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      note: newNote
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required"
      });
    }

    const note = await Note.findById(noteId);
    if (!note || note.deletedAt) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }

    note.title = title;
    note.content = content;
    await note.save();

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note: note
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;

    const note = await Note.findById(noteId);
    if (!note || note.deletedAt) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }

    note.deletedAt = new Date();
    await note.save();

    res.status(200).json({
      success: true,
      message: "Note deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const summarizeNote = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Summarization not yet implemented"
  });
};


export const bulkAddNotes = async (req, res) => {
  try {
    const notes = req.body;
    if(!Array.isArray(notes)){
      return res.status(400).json({
        success: false,
        message: "Invalid request body"
      });
    }

    const addedNotes = await Note.insertMany(notes);
    res.status(201).json({
      success: true,
      message: "Notes added successfully",
      notes: addedNotes
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }
}
