// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCZdUiJMTr0GzonF-lkkkWvdChMMiN-8g",
  authDomain: "meeting-schedular-1c91d.firebaseapp.com",
  projectId: "meeting-schedular-1c91d",
  storageBucket: "meeting-schedular-1c91d.firebasestorage.app",
  messagingSenderId: "695944013255",
  appId: "1:695944013255:web:82f74beef761b6d26e65e2",
  measurementId: "G-S0M5Q99SW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);