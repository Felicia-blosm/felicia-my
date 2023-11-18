import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import Passworderror from './Passworderror';
import { Routes } from 'react-router-dom';
import Fhorge from './Fhorge';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<App/>}/>
      <Route path='/passworderror' element={<Passworderror/>}/>
      <Route path='/fhorge' element={<Fhorge/>}/>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
