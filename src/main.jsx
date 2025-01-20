
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from "react-router-dom";
import { theme } from './utils/theamProvider';
import RootLayout from './RootLayout';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <ThemeProvider theme={theme}>
       <RootLayout/>
    <App />
       </ThemeProvider>
    </BrowserRouter>
)
