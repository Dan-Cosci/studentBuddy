import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    trim:true,
    minlength: 1,
  },
  content:{
    type: String,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  notebookId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notebook',
    required: true
  },
  deletedAt:{
    type: Date,
    default: null
  }

},{
  timestamps:true,
  versionKey: false,
});

const Note = mongoose.model('Note', noteSchema);
export default Note;
