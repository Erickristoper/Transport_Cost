import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const firebaseConfig = {
  apiKey: "AIzaSyAX9kAg_ax_ENavCEUDRfU4-G9WTKmVjL0",
  authDomain: "transport-quotation.firebaseapp.com",
  projectId: "transport-quotation",
  storageBucket: "transport-quotation.appspot.com",
  messagingSenderId: "624800374528",
  appId: "1:624800374528:web:e0156e408f9d147efa9de5",
  measurementId: "G-57CK97KHFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);