import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

// Set the basename to process.env.PUBLIC_URL, which is defined by Create React App
const basename = process.env.PUBLIC_URL || '/';

root.render(
  <Router basename={basename}>
    <App />
  </Router>
);
