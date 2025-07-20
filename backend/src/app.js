import express from 'express';
import morgan from 'morgan';

import { PORT } from './config/config.js';
import sequelize from './database/database.js';
import './models/user.model.js'; // Import User model to ensure it's registered
import './models/note.model.js'; // Import Note model to ensure it's registered

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))


//routes

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('\x1b[32mDatabase connected and sync successful.\x1b[0m');
  } catch (error) {
    console.error('\x1b[31mUnable to connect to the database:\x1b[0m', error);
    process.exit(1); // Exit the process if database connection fails
  }
});

export default app;