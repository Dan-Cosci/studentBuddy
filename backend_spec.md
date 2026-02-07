# Student Buddy Backend Specification

## Overview
Student Buddy is a note-taking and organization application backend built with Node.js, Express, and MongoDB. The backend provides RESTful APIs for user authentication, note management, notebook organization, and AI-powered features.

## Technology Stack
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with HTTP-only cookies
- **Security**: ArcJet for rate limiting and security
- **AI Integration**: Google Gemini API
- **Email Service**: Mailtrap
- **Logging**: Morgan
- **CORS**: Configured for frontend integration

## Project Structure
```
backend/
├── src/
│   ├── app.js                      # Main application entry point
│   ├── config/                     # Configuration files
│   │   ├── config.js               # Environment configuration
│   │   ├── database.js             # MongoDB connection
│   │   ├── gemini.js               # Gemini AI configuration
│   │   ├── mailtrap.js             # Mailtrap email service config
│   │   └── arcjet.js               # ArcJet security config
│   ├── controllers/                # Business logic controllers
│   │   ├── auth.controller.js      # Authentication logic
│   │   ├── user.controller.js      # User management
│   │   ├── notes.controller.js     # Note operations
│   │   └── notebook.controller.js  # Notebook operations
│   ├── models/                     # MongoDB schemas
│   │   ├── user.model.js           # User schema
│   │   ├── note.model.js           # Note schema
│   │   └── notebook.model.js       # Notebook schema
│   ├── routes/                     # API route definitions
│   │   ├── router.js               # Main router
│   │   ├── auth.routes.js          # Authentication routes
│   │   ├── users.routes.js         # User routes
│   │   ├── notes.routes.js         # Note routes
│   │   └── notebooks.routes.js     # Notebook routes
│   ├── middleware/                 # Custom middleware
│   │   ├── auth.middleware.js      # JWT authentication
│   │   ├── arcjet.middleware.js    # Security middleware
│   │   └── error.middleware.js     # Error handling
│   ├── services/                   # External service integrations
│   │   ├── gemini.service.js       # AI service (empty)
│   │   └── mailtrap.service.js     # Email service
│   └── utils/                      # Utility functions
│       └── generateCode.js         # Code generation utilities
├── public/                         # Static files
├── package.json                    # Dependencies and scripts
└── .env.development.local          # Environment variables
```

## Data Models

### User Model (`user.model.js`)
```javascript
{
  username: String,      // Required, 2-50 chars
  email: String,         // Required, unique, validated
  password: String,      // Required, min 6 chars, select: false
  deletedAt: Date,       // Soft delete timestamp
  timestamps: true       // createdAt, updatedAt
}
```

### Note Model (`note.model.js`)
```javascript
{
  title: String,         // Required, min 1 char
  content: String,       // Required
  userId: ObjectId,      // Required, references User
  notebookId: ObjectId,  // Required, references Notebook
  deletedAt: Date,       // Soft delete timestamp
  timestamps: true       // createdAt, updatedAt
}
```

### Notebook Model (`notebook.model.js`)
```javascript
{
  title: String,         // Required, min 1 char
  userId: ObjectId,      // Required, references User
  deletedAt: Date,       // Soft delete timestamp
  timestamps: true       // createdAt, updatedAt
}
```

## API Endpoints

### Base URL: `/api/v1`

### Authentication Routes (`/auth`)
| Method | Endpoint          | Description           | Auth Required |
|--------|-------------------|-----------------------|---------------|
| POST   | `/login`          | User login            | No            |
| POST   | `/register`       | User registration     | No            |
| POST   | `/logout`         | User logout           | Yes           |
| POST   | `/reset-password` | Password reset        | No            |
| GET    | `/me`             | Get current user info | Yes           |

### User Routes (`/users`)
| Method | Endpoint | Description      | Auth Required |
|--------|----------|------------------|---------------|
| GET    | `/`      | Get all users    | Yes           |
| GET    | `/:id`   | Get user details | Yes           |

### Note Routes (`/notes`)
| Method | Endpoint           | Description              | Auth Required |
|--------|--------------------|--------------------------|---------------|
| GET    | `/`                | Get all notes            | No            |
| GET    | `/ai`              | AI note summarization    | No            |
| GET    | `/:userId`         | Get all notes for a user | Yes           |
| POST   | `/:userId`         | Create a new note        | Yes           |
| GET    | `/:userId/:noteId` | Get note details         | Yes           |
| PUT    | `/:noteId`         | Update a note            | Yes           |
| DELETE | `/:noteId`         | Delete a note            | Yes           |
| POST   | `/bulk`            | Bulk add notes (dev)     | No            |

### Notebook Routes (`/notebooks`)
| Method | Endpoint               | Description              | Auth Required |
|--------|------------------------|--------------------------|---------------|
| GET    | `/`                    | Get all notebooks        | No            |
| GET    | `/:userId`             | Get user's notebooks     | Yes           |
| GET    | `/:userId/:notebookId` | Get notebook details     | Yes           |
| POST   | `/`                    | Create a notebook        | Yes           |
| PUT    | `/:id`                 | Update a notebook        | Yes           |
| DELETE | `/:id`                 | Delete a notebook        | Yes           |
| POST   | `/bulk`                | Bulk add notebooks (dev) | No            |

## Authentication Flow
1. **Registration**: User provides email, username, password → Password hashed with bcrypt → User created in DB
2. **Login**: User provides email/password → Credentials verified → JWT token generated → Token stored in HTTP-only cookie
3. **Protected Routes**: Middleware checks for valid JWT token in cookies → Token verified → User ID attached to request
4. **Logout**: Clears authentication cookie

## Security Features
1. **JWT Authentication**: Token-based auth with HTTP-only cookies
2. **Password Hashing**: bcrypt with salt rounds
3. **CORS Configuration**: Restricted to frontend URL with specific methods/headers
4. **ArcJet Integration**: Rate limiting and security protection
5. **Input Validation**: Schema validation for all models
6. **Error Handling**: Centralized error middleware

## Environment Configuration
Required environment variables in `.env.development.local`:
```bash
NODE_ENV=development
PORT=3000
FRONTEND_SERVER_URL=http://localhost:5173

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# MongoDB
MONGODB_OPTIONS=your_db_name
MONGODB_HOST=your_cluster.mongodb.net
MONGODB_USERNAME=your_username
MONGODB_PASSWORD=your_password

# Mailtrap
MAILTRAP_DOMAIN=your_domain
MAILTRAP_SANDBOX_ID=your_sandbox_id
MAILTRAP_API_KEY=your_api_key

# ArcJet
ARCJET_ENV=development
ARCJET_KEY=your_arcjet_key

# Gemini AI
GEMINI_KEY=your_gemini_key
GEMINI_MODEL=gemini-1.5-flash
GEMINI_INSTRUCTION=your_system_instruction
```

## Development Scripts
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run clean    # Clean and reinstall dependencies
```

## Error Handling
- **400**: Bad Request - Invalid input
- **401**: Unauthorized - Authentication required/failed
- **404**: Not Found - Resource not found
- **500**: Internal Server Error - Server-side issues

All errors are handled by centralized error middleware and return consistent JSON responses.

## Database Connection
- MongoDB Atlas cloud database
- Mongoose connection with automatic reconnection
- Connection string: `mongodb+srv://username:password@host/database`

## Middleware Stack
1. **CORS**: Cross-origin resource sharing
2. **JSON Parser**: Parse JSON request bodies
3. **URL Encoded**: Parse URL-encoded data
4. **Static Files**: Serve public directory
5. **Cookie Parser**: Parse HTTP cookies
6. **Morgan**: HTTP request logging
7. **ArcJet**: Security middleware
8. **Routes**: API endpoints
9. **Error Handler**: Centralized error handling

## Dependencies
### Core
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `bcrypt`: Password hashing
- `jsonwebtoken`: JWT authentication
- `cookie-parser`: Cookie handling

### Security
- `@arcjet/node`: Security and rate limiting
- `cors`: Cross-origin resource sharing

### Services
- `@google/genai`: Google Gemini AI integration
- `mailtrap`: Email service

### Development
- `nodemon`: Development server with auto-reload
- `eslint`: Code linting
- `morgan`: HTTP request logging

## API Response Format
All API responses follow this format:
```json
{
  "success": true/false,
  "message": "Descriptive message",
  "data": {} || [] || null,
  "error": "Error message (if applicable)"
}
```

## Deployment Considerations
1. **Production Environment**: Set `NODE_ENV=production`
2. **HTTPS**: Enable secure cookies in production
3. **CORS**: Update frontend URL in production
4. **Database**: Use production MongoDB instance
5. **Security**: Use strong JWT secrets and environment variables

## Future Enhancements
1. **Email Verification**: Complete mailtrap integration
2. **AI Features**: Implement Gemini AI services
3. **File Uploads**: Support for note attachments
4. **Search**: Full-text search for notes
5. **Sharing**: Note/notebook sharing between users
6. **Tags**: Tag system for notes organization