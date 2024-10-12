import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App'; // Import your main App component
import './index.css'; // Optional: Import global styles
import { BrowserRouter} from 'react-router-dom'

// Create the root element where the React app will be rendered
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component wrapped in StrictMode (optional, helps with warnings)
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  
);
