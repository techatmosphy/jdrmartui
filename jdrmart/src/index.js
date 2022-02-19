import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header'
import Footer from './pages/Footer'

ReactDOM.render(

  <div>
    <div className='App-header'><Header /></div>
    <div className='App'>
    <App />
    </div>
    <div className='App-footer'> <Footer /></div>
    </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
