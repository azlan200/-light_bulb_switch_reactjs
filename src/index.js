import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseRef from './UseRef';
import reportWebVitals from './reportWebVitals';
import Lightbulb from './LightBulb.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Lightbulb/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
