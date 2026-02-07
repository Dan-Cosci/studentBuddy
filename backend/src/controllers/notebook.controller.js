import Notebook from "../models/notebook.model.js";
import { config } from "../config/config.js";

export const getAllNotebooks = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Notebooks not implemented yet"
  });
}

export const getAllUserNotebooks = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "User notebooks not implemented yet"
  });
}

export const getNotebookDetails = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Notebook details not implemented yet"
  });
}

export const addNotebook = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Add notebook not implemented yet"
  });
}

export const updateNotebook = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Update notebook not implemented yet"
  });
}

export const deleteNotebook = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Delete notebook not implemented yet"
  });
}

// dev
export const bulkAddNotebooks = async (req, res) => {
  try {
    const notebooks = req.body;
    if (!Array.isArray(notebooks)) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body"
      });
    }

    const addedNotebooks = await Notebook.insertMany(notebooks);
    res.status(201).json({
      success: true,
      message: "Notebooks added successfully",
      notebooks: addedNotebooks
    });
    

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }
};