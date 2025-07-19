import { DataTypes, Model } from 'sequelize';

import sequelize from "../database/database.js";

/** Note model representing a note in the system.
 * This model includes fields for title, content, userId, and timestamps.
 * It also includes validation for title length and content presence.
 * @extends Model
 * @property {number} id - Unique identifier for the note.
 * @property {string} title - Title of the note, must be between 2 and 100 characters.
 * @property {string} content - Content of the note, must not be empty.
 * @property {number} userId - Foreign key referencing the user who created the note.
 * @property {Date} created_at - Timestamp of when the note was created.
 * @property {Date} updated_at - Timestamp of when the note was last updated.
 * @property {Date} deleted_at - Timestamp of when the note was soft deleted.
 * **/

class Note extends Model {};
Note.init({
  id :{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100]
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Assuming the User model is named 'Users'
      key: 'id'
    }
  }
},{
  sequelize,
  modelName: 'Note',
  timestamps: true,
  paranoid: true, // Enables soft deletes
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at', // Optional, if you want to track soft deletes
});

export default Note