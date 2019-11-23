import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import "./fonts/Merriweather-Regular.ttf"
import "./fonts/Raleway-Regular.ttf"

ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));