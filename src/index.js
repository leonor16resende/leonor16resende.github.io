import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import './fonts/Jaldi/Jaldi-Regular.ttf';
import './fonts/Jaldi/Jaldi-Bold.ttf';
import './fonts/Montserrat/Montserrat-Regular.ttf';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
