import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { names } from './data';
import 'normalize-css';
import './css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App names={names}/>
  </React.StrictMode>,
  document.getElementById('root')
);
