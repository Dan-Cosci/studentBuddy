import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';

import { PORT } from './config/config.js';
import sequelize from './database/database.js';
import './models/user.model.js'; // Import User model to ensure it's registered
import './models/note.model.js'; // Import Note model to ensure it's registered

import authRoutes from './routes/auth.routes.js';
import noteRoutes from './routes/notes.routes.js';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from 'public' directory
app.use(cookieParser());
app.use(morgan("dev"))


//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notes', noteRoutes);

// welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Student Buddy API"
  });
});
app.get('/home', (req, res) => {
  res.sendFile('index.html', { root: './public'});
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('\x1b[32mDatabase connected and sync successful.\x1b[0m');
    console.log(`\x1b[32mServer is running on http://localhost:${PORT}\x1b[0m`);

    // tested bcrypt functionality
    // const salt = bcrypt.genSaltSync(10);
    // console.log(`\x1b[32mSalt generated: ${salt}\x1b[0m`);

    // const hashedPassword = bcrypt.hashSync('marnie', salt);
    // console.log(`\x1b[32mHashed password: ${hashedPassword}\x1b[0m`);

  } catch (error) {
    console.error('\x1b[31mUnable to connect to the database:\x1b[0m', error);
    process.exit(1); // Exit the process if database connection fails
  }
});

export default app;