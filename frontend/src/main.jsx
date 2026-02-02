import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UIProvider } from './context/UIContext.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <UIProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="center-top"
          reverseOrder={true}
          containerStyle={{zIndex: 9999}}
          />
      </BrowserRouter>
    </UIProvider>
  // </StrictMode>,
)
