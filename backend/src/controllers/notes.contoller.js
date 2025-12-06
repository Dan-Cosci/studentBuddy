import sequelize from "../database/database.js";
import Note from "../models/note.model.js"
import ai from "../services/gemini.service.js"

export const GetAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.findAll({ paranoid: false });
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
    const { userId } = req.params;
    const notes = await Note.findAll({
      where:{
        userid: userId 
      }
    });

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
  const { userId, noteId }= req.params;
  const note = await Note.findByPk(noteId);
  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note Not Found"
    });
  }

  if (parseInt(userId) != note.userId){
    return res.status(401).json({
      success:false,
      message:"Unauthorized access, note from different user"
    })
  }

  res.status(200).json({
    success:true,
    message:"Note details loaded",
    data: note
  });  
  } catch (error) {
    next(error);
  }
};

export const AddNote = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { userId } = req.params;
    

    const { title, content } = req.body;
    if (!title || !content){
      return res.status(400).json({
        success: false,
        message: "content and title fields are required"
      });
    }
    
    const newNote = await Note.create({
      title,content,userId
    },{transaction: t}
  );
  
  await t.commit();
  
  res.status(200).json({
    success:true,
    message:`Added a new note to UserId: ${ userId }`,
    data: newNote 
  });
} catch (error) {
  t.rollback();
  next(error);
}
};

export const updateNote = async (req, res, next) => {
  const t = await sequelize.transaction();

  try {
    const { noteId } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content fields are required."
      });
    }

    const note = await Note.findByPk(noteId);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found."
      });
    }
    if (note.deleted_at) {
      return res.status(400).json({
        success: false,
        message: "Note deleted"
      });
    }

    await note.update(
      { title, content },
      { transaction: t }
    );

    await t.commit();

    res.status(200).json({
      success: true,
      message: `Updated note with ID: ${noteId}`,
      data: note    
    });

  } catch (error) {
    await t.rollback();
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;

    const note = await Note.findByPk(noteId);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found."
      });
    }
    if (note.deleted_at) {
      return res.status(400).json({
        success: false,
        message: "Note already deleted"
      });
    }

    note.destroy();
    res.status(200).json({
      success: true,
      message: "Note deleted",
      data: note
    });

  } catch (error) {
    next(error)
  }
};

export const summarizeNote = async (req, res, next) => {
  const greet = await ai("introduce yourself");
  console.log(greet);
  res.status(200).json({
    success:true,
    message: "to be properly implimented",
    data: greet
  });

};