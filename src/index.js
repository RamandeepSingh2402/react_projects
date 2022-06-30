import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
/**
 * go to internet to look up the material-ui documentation
 * go to the components > cards (for the templates of the cards)
 * go to the code section, and then we can see the code and then copy paste it
 * BENEFITS OF MATERIAL UI:
 * The components are responsive, i.e. according to the size of the screen, they adjust accordingly.
 * CHAKRA UI AND REACT BOOTSTRAP CAN ALSO BE USED INSTEAD OF MATERIAL UI
 * In material UI, we have APPBAR for navigation bar
 * The data in dummyBoards.js is static, and we'll get replace it by the API
*/