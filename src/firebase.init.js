// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDabMMFUSuwlxQlOlcwdfh8hI2ehQoODWs",
  authDomain: "bidapp-9baab.firebaseapp.com",
  projectId: "bidapp-9baab",
  storageBucket: "bidapp-9baab.appspot.com",
  messagingSenderId: "359190602092",
  appId: "1:359190602092:web:76692a56ccfd9a3450d349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;