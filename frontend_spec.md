# Student Buddy Frontend Specification

## Overview
Student Buddy is a React-based note-taking application frontend built with modern web technologies. The application provides a focused workspace for students with markdown editing, notebook organization, and AI-assisted features.

## Technology Stack
- **Framework**: React 19.2.0 with Vite build tool
- **Routing**: React Router DOM 7.12.0
- **State Management**: Zustand with persistence
- **UI Components**: Custom components with SCSS styling
- **Markdown Editor**: @mdxeditor/editor for rich text editing
- **HTTP Client**: Axios with interceptors
- **Icons**: React Icons library
- **Notifications**: React Hot Toast
- **Styling**: SCSS with modular architecture
- **Build Tool**: Vite 7.2.4

## Project Structure
``` 
frontend/ 
├── src/  
│   ├── App.jsx                         # Main application component
│   ├── assets/scss/                    # Global SCSS styles
│   │   └── main.scss                   # Main stylesheet
│   ├── config/                         # Configuration files
│   │   ├── config.js                   # Environment configuration
│   │   └── api.js                      # Axios instance configuration
│   ├── context/                        # React context providers
│   │   ├── UIContext.jsx               # UI state management
│   │   └── useKeyboard.jsx             # Keyboard shortcuts
│   ├── routes/                         # Application routing
│   │   ├── Main.routes.jsx             # Main router component
│   │   ├── App.routes.jsx              # Protected app routes
│   │   ├── Auth.routes.jsx             # Authentication routes
│   │   ├── Landing.routes.jsx          # Landing page routes
│   │   └── Protected.routes.jsx        # Route protection wrapper
│   ├── features/                       # Feature-based modules
│   │   ├── auth/                       # Authentication feature
│   │   │   ├── AuthStore.js            # Auth state management
│   │   │   ├── services/               # Auth API services
│   │   │   │   └── auth.service.js   
│   │   │   ├── pages/                  # Auth pages
│   │   │   │   └── AuthForm.jsx    
│   │   │   ├── layout/                 # Auth layouts
│   │   │   │   └── AuthLayout.jsx    
│   │   │   └── AuthForm.scss           # Auth form styles
│   │   ├── app/                        # Main application feature
│   │   │   ├── useAppStore.js          # App state management
│   │   │   ├── services/               # App API services
│   │   │   │   ├── notes.service.js    
│   │   │   │   └── notebooks.service.js
│   │   │   ├── pages/                  # App pages
│   │   │   │   ├── Dashboard.jsx 
│   │   │   │   └── Active.jsx  
│   │   │   ├── components/             # App components
│   │   │   │   ├── Markdown.jsx  
│   │   │   │   ├── Navbar.jsx  
│   │   │   │   ├── Dropdown.jsx  
│   │   │   │   └── NavPagesButton.jsx  
│   │   │   ├── layout/                 # App layouts
│   │   │   │   └── AppLayout.jsx     
│   │   │   └── active.scss             # Active page styles
│   │   ├── landing/                    # Landing page feature
│   │   │   ├── pages/                  # Landing pages
│   │   │   │   └── Landing.jsx     
│   │   │   ├── components/             # Landing components
│   │   │   │   ├── Footer.jsx    
│   │   │   │   └── LandingNav.jsx    
│   │   │   ├── layout/                 # Landing layouts
│   │   │   │   └── LandingLayout.jsx 
│   │   │   └── landing.scss            # Landing page styles
│   │   └── Page404.jsx                 # 404 error page
│   ├── services/                       # Global services
│   │   └── users.service.js            # User management service
│   └── main.jsx                        # Application entry point
├── public/                             # Static assets
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
└── .env.development.local              # Environment variables
``` 

## Application Architecture

### State Management
- **Zustand Stores**: Lightweight state management with persistence
- **Auth Store**: Manages authentication state, user data, and auth operations
- **App Store**: Manages notes, notebooks, and application data
- **UI Context**: Manages UI state like sidebar visibility

### Routing Structure
- **Landing Routes** (`/`): Public landing page
- **Auth Routes** (`/auth`): Authentication pages (login/register)
- **App Routes** (`/app`): Protected application pages
- **Protected Routes**: Wrapper for authenticated routes

### Authentication Flow
1. **Login/Register**: Users authenticate via forms
2. **JWT Storage**: Tokens stored in HTTP-only cookies
3. **Protected Routes**: Middleware checks auth status
4. **Auto-login**: Persistent sessions via localStorage
5. **Logout**: Clears auth state and cookies

## Key Components

### Markdown Editor (`Markdown.jsx`)
- Built with @mdxeditor/editor
- Supports headings, lists, quotes, and markdown shortcuts
- Custom styling with SCSS modules
- Real-time preview and editing

### Authentication Form (`AuthForm.jsx`)
- Dynamic form for login/register modes
- Password validation and confirmation
- Show/hide password toggle
- Form validation with visual feedback

### Navigation Components
- **Navbar**: Main application navigation
- **Dropdown**: Reusable dropdown menus
- **NavPagesButton**: Navigation button components
- **LandingNav**: Landing page navigation

### Layout Components
- **AppLayout**: Main application layout with sidebar
- **AuthLayout**: Authentication page layout
- **LandingLayout**: Landing page layout

## API Integration

### Axios Configuration (`api.js`)
```javascript
const instance = axios.create({
  baseURL: `${config.BASE_URL}${config.API_VERSION}`,
  withCredentials: true,  // For HTTP-only cookies
  headers: {
    "Content-Type": "application/json",
  },
});
```

### Service Layers
- **Auth Service**: Login, register, logout, checkAuth
- **Notes Service**: CRUD operations for notes
- **Notebooks Service**: CRUD operations for notebooks
- **Users Service**: User management operations

### API Endpoints Consumed
- `POST /auth/login` - User authentication
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user
- `GET /notes/:userId` - Get user notes
- `GET /notebooks/:userId` - Get user notebooks

## Styling Architecture

### SCSS Structure
- **Global Styles**: `main.scss` with variables and mixins
- **Component Styles**: Modular SCSS files per component
- **Feature Styles**: Organized by feature modules
- **Responsive Design**: Mobile-first approach

### Design System
- **Typography**: Custom font stack and sizing
- **Colors**: Consistent color palette
- **Spacing**: Systematic spacing scale
- **Components**: Reusable UI patterns

## Environment Configuration
Required environment variables in `.env.development.local`:
```bash
VITE_API_BASE_URL="http://localhost:5500"
VITE_API_VERSION="/api/v1/"
```

## Development Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis
```

## State Management Details

### Auth Store (`AuthStore.js`)
```javascript
{
  isAuth: boolean,      // Authentication status
  loading: boolean,     // Loading state
  error: string|null,   // Error messages
  user: object|null,    // User data
  
  // Actions
  login: async(),       // User login
  register: async(),    // User registration
  logout: (),          // User logout
  checkAuth: async(),   // Verify authentication
}
```

### App Store (`useAppStore.js`)
```javascript
{
  notes: [],           // User notes array
  notebooks: [],       // User notebooks array
  
  // Actions
  getAllUserNotes: async(),    // Fetch user notes
  getAllUserNotebooks: async(), // Fetch user notebooks
}
```

## Routing Details

### Route Protection
- **ProtectedRoute**: Wrapper component for authenticated routes
- **Auth Check**: Verifies JWT token with backend
- **Redirect**: Unauthenticated users redirected to login
- **Loading State**: Shows loading indicator during auth check

### Route Hierarchy
```
/
├── / (Landing) [Public]
├── /auth [Public]
│   └── ?mode=login|register
└── /app [Protected]
    ├── / (Active/Dashboard)
    └── * (404)
```

## User Interface Features

### Markdown Editor
- **Rich Text Editing**: WYSIWYG markdown editor
- **Keyboard Shortcuts**: Common markdown shortcuts
- **Plugin System**: Extensible with MDXEditor plugins
- **Custom Styling**: Themed editor interface

### Authentication Interface
- **Mode Switching**: Toggle between login/register
- **Form Validation**: Real-time validation feedback
- **Password Security**: Secure password handling
- **Error Handling**: User-friendly error messages

### Navigation
- **Responsive Sidebar**: Collapsible navigation
- **Breadcrumb Navigation**: Context-aware navigation
- **Quick Actions**: Keyboard shortcuts for common tasks
- **User Menu**: Profile and settings access

## Performance Optimizations
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component lazy loading
- **State Persistence**: LocalStorage for app state
- **API Caching**: Service layer caching strategies
- **Bundle Optimization**: Vite build optimizations

## Error Handling
- **API Errors**: Centralized error handling in services
- **Network Errors**: Graceful degradation
- **Form Errors**: User-friendly validation messages
- **404 Handling**: Custom 404 page
- **Error Boundaries**: React error boundaries for crashes

## Accessibility Features
- **Semantic HTML**: Proper HTML structure
- **ARIA Labels**: Accessible rich internet applications
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling
- **Screen Reader Support**: ARIA attributes and roles

## Development Workflow

### Local Development
1. Set up environment variables
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access at: `http://localhost:5173`

### Code Quality
- **ESLint**: Code linting with React-specific rules
- **Prettier**: Code formatting (if configured)
- **Type Checking**: React PropTypes or TypeScript
- **Code Reviews**: Peer review process

### Testing Strategy
- **Unit Tests**: Component testing
- **Integration Tests**: Feature testing
- **E2E Tests**: User flow testing
- **Performance Tests**: Load and stress testing

## Deployment Considerations

### Build Process
```bash
npm run build    # Production build
npm run preview  # Verify build locally
```

### Production Requirements
- **Environment Variables**: Production API URLs
- **HTTPS**: Secure connections
- **CDN**: Static asset delivery
- **Monitoring**: Error tracking and analytics
- **Backup**: State persistence backup

### Hosting Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Docker**: Containerized deployment
- **CI/CD**: Automated deployment pipeline

## Future Enhancements
1. **AI Integration**: Gemini AI for note summarization
2. **Real-time Collaboration**: Live note sharing
3. **Offline Support**: Progressive Web App features
4. **Mobile App**: React Native or PWA
5. **Themes**: Dark/light mode and custom themes
6. **Export Options**: PDF, Markdown, HTML export
7. **Import Tools**: Import from other note apps
8. **Advanced Search**: Full-text search with filters
9. **Tags & Categories**: Enhanced organization
10. **Analytics**: Usage statistics and insights