import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import '../node_modules/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Popper from 'popper.js';
import $ from 'jquery';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
