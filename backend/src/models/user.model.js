import { DataTypes, Model } from 'sequelize';

import sequelize from "../database/database.js";

/** * User model representing a user in the system.
 * This model includes fields for username, email,  password, and timestamps.
 * It also includes validation for email format and password length.  
 * @extends Model
 * @property {number} id - Unique identifier for the user.
 * @property {string} username - Username of the user, must be unique and between 2 and 50 characters.
 * @property {string} email - Email of the user, must be unique, valid format, and between 5 and 100 characters.
 * @property {string} password - Password of the user, must be between 6 and 100 characters.
 * @property {Date} created_at - Timestamp of when the user was created.
 * @property {Date} updated_at - Timestamp of when the user was last updated.
 * @property {Date} deleted_at - Timestamp of when the user was soft deleted. 
 **/

// Define the User model
class User extends Model {};
User.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false 
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50]
      } 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
        len: [5, 100],
        is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      },
      // Add a setter if you want lowercase + trimmed
      set(value) {
        this.setDataValue('email', value.trim().toLowerCase());
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 100]
      }
    }
  },{
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true, // Enables soft deletes 
  }
);

export default User;