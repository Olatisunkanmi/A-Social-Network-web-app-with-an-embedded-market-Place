import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Context } from './Contexts/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Context>
  <BrowserRouter>
          <App />
    </BrowserRouter>
  </Context>
 
);
