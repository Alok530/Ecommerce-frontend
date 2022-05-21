import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import EcartStateContext from '../src/context/CartStateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EcartStateContext>
        <App />
      </EcartStateContext>
    </BrowserRouter>
  </React.StrictMode>
);