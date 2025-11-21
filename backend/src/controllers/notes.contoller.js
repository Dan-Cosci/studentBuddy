import sequelize from "../database/database.js";
import Note from "../models/note.model.js"

export const GetAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.findAll();
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

export const GetNoteDetails = async (req, res, next) => {};
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
