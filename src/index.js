import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  [
  <h1> Welcome to Vijya's  React Website</h1>,
  <h2>Five favourite web series on netflix</h2>,
  
  <ol>
  <li>Guilty</li>
  <li>Little Things</li>
  <li>Stranger Things</li>
  <li>Delhi Crime</li>
  <li>She</li>
  </ol>

],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
