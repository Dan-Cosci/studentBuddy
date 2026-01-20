import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import toast ,{ Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { UIProvider } from './context/UIContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>
      
      <AuthProvider>
        <BrowserRouter>
          <App />
          <Toaster
            position="center-top"
            reverseOrder={true}
            containerStyle={{zIndex: 9999}}
            />
        </BrowserRouter>
      </AuthProvider>
    </UIProvider>
  </StrictMode>,
)
