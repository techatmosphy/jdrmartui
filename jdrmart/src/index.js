import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './pages/Header'

ReactDOM.render(

<div>
  <div className='App-header'><Header/></div>

        <App />
    <div className='App-footer'/> <Footer/></div>   
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
