
import App from './App.jsx'

import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"

import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
