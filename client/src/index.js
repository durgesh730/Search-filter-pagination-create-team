import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DriversData from './component/useContext/DriversData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DriversData>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </DriversData>
)
