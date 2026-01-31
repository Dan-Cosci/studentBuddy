import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// database
import { config } from './config/config.js';
import connectDB from './config/database.js';

// routes
import authRoutes from './routes/auth.routes.js';
import noteRoutes from './routes/notes.routes.js';
import userRoutes from './routes/users.routes.js';

// middlewares
import { arcjetMiddleware } from './middleware/arcjet.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';


// main app
const app = express();

app.use(cors({
  origin: config.frontendUrl , // Allow requests from your frontend
  credentials: true, // Allow cookies to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}))

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from 'public' directory
app.use(cookieParser());
app.use(morgan("dev"))
app.use(arcjetMiddleware)

//routes  
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notes', noteRoutes);
app.use('/api/v1/users', userRoutes);

// error handling middleware
app.use(errorHandler);

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


connectDB().then(() => {
  app.listen(config.port, () =>{
    console.log('\x1b[32mDatabase connected and sync successful.\x1b[0m');
    console.log(`\x1b[32mServer is running on http://localhost:${config.port}\x1b[0m`);
  });
}).catch((error) => {
  console.error('\x1b[31mUnable to connect to the database:\x1b[0m', error);
});

export default app;