import React from 'react';
import ReactDOM from 'react-dom/client';
// index.js or main.jsx
import './index.css';  // or your Tailwind base file

import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
