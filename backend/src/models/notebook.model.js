import mongoose from 'mongoose';

const notebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },

}, { timestamps: true });

const Notebook = mongoose.model('Notebook', notebookSchema);

export default Notebook;