import Notebook from "../models/notebook.model.js";

export const getAllNotebooks = async (req, res) => {
  try {
    const nb = await Notebook.find();
    res.status(200).json({
      success: true,
      message: "Notebooks loaded successfully",
      notebooks: nb
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }
}

export const getAllUserNotebooks = async (req, res) => {
  try {
    const { userId } = req.params;
    const nb = await Notebook.find({ userId });
    res.status(200).json({
      success: true,
      message: "User notebooks loaded successfully",
      notebooks: nb
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message: "Internal server error",
      stackTrace: error.stack
    })
  }
}

export const getNotebookDetails = async (req, res) => {
  try {
    const { userId, notebookId } = req.params;
    const nb = await Notebook.findById(notebookId);
    if (!nb) {
      return res.status(404).json({
        success: false,
        message: "Notebook not found"
      });
    }

    // checks unauthorized access
    if (nb.userId.toString() !== userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }

    res.status(200).json({
      success: true,
      message: "Notebook details loaded successfully",
      notebook: nb
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }

}

export const addNotebook = async (req, res) => {
  try {
    const { userId } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required"
      });
    }

    const newNotebook = await Notebook.create({
      title,
      userId
    });

    res.status(201).json({
      success: true,
      message: "Notebook added successfully",
      notebook: newNotebook
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }
}

export const updateNotebook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required"
      });
    }

    const existingNotebook = await Notebook.findById(id);
    if (!existingNotebook) {
      return res.status(404).json({
        success: false,
        message: "Notebook not found"
      });
    }
    const nb = await Notebook.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Notebook updated successfully",
      notebook: nb
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }
}

export const deleteNotebook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNotebook = await Notebook.findById(id);
    if (!deletedNotebook) {
      return res.status(404).json({
        success: false,
        message: "Notebook not found"
      });
    }

    deletedNotebook.deletedAt = new Date();
    await deletedNotebook.save();

    res.status(200).json({
      success: true,
      message: "Notebook deleted successfully",
      notebook: deletedNotebook
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message: "Internal server error",
      stackTrace: error.stack
    });
  }
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