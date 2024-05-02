// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHbtXHxu7M0tz4v8vOaSCAX8q4u5RXED0",
  authDomain: "danceacademy-92b7e.firebaseapp.com",
  databaseURL: "https://danceacademy-92b7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "danceacademy-92b7e",
  storageBucket: "danceacademy-92b7e.appspot.com",
  messagingSenderId: "867941060559",
  appId: "1:867941060559:web:dd37be165e810a50718cba",
  measurementId: "G-EQK5FFV53H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getDatabase(app);

export default db;