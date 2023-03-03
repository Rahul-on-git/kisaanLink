import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/userContext';
import { CartContextProvider } from './context/shoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

