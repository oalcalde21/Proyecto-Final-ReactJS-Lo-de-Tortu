import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFnqjgT4BNJb8Mp2gp0oqxooskMLvktug",
  authDomain: "lo-de-tortu.firebaseapp.com",
  databaseURL: "https://lo-de-tortu-default-rtdb.firebaseio.com",
  projectId: "lo-de-tortu",
  storageBucket: "lo-de-tortu.appspot.com",
  messagingSenderId: "470258564580",
  appId: "1:470258564580:web:214463ecd2ce6a7e819bf1",
  measurementId: "G-Z4DY3Y71MN"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
