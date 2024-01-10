// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb-qlPG8fb4vNRXq9H_2mx7YWyQaEsmdM",
  authDomain: "netflixgpt-21521.firebaseapp.com",
  projectId: "netflixgpt-21521",
  storageBucket: "netflixgpt-21521.appspot.com",
  messagingSenderId: "150756665597",
  appId: "1:150756665597:web:da2d8af55ee63e0b54b694",
  measurementId: "G-WCKCRWW5Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();