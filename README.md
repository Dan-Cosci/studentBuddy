# StudentBuddy

## Description

<!-- Add your project description here -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dan-Cosci/studentBuddy.git
   cd studentBuddy
   ```

2. **Install all dependencies for both backend and frontend:**
   ```bash
   npm run install-all
   ```

### Running the Application

To start both backend and frontend development servers:

```bash
npm run dev
```

This will run the backend and frontend in development mode concurrently.

## Project Structure

- `backend/` — Express backend server
- `frontend/` — React frontend (Vite)

## Custom Scripts

- `npm run install-all` — Installs dependencies in both backend and frontend
- `npm run dev` — Runs both backend and frontend dev servers

## Environment Variables

Create a `.env.*.local` file in the `backend/` directory for backend environment variables. See `.env.production.local` if available.

## License

This project is licensed under the ISC License.
