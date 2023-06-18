import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const state = window.__STATE__;
delete window.__STATE__;

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
