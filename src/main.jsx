import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // databaseURL: import.meta.env.,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "poyo-73304.appspot.com",
  messagingSenderId: "1044252825166",
  appId: "1:1044252825166:web:f5af8e4630d04bad53151f",
  measurementId: "G-B3K9EF9N6X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
