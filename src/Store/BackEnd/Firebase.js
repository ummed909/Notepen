// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiXB25RCt5lelV3jr7YTzSUcfm3EKqNSw",
  authDomain: "notepen-a307e.firebaseapp.com",
  databaseURL: "https://notepen-a307e-default-rtdb.firebaseio.com",
  projectId: "notepen-a307e",
  storageBucket: "notepen-a307e.appspot.com",
  messagingSenderId: "90889703082",
  appId: "1:90889703082:web:27f69858e7dc7d8fa80ad3",
  measurementId: "G-VM685TRZY6"
};

const app = initializeApp(firebaseConfig);

export default app;


//https://notepen-a307e.firebaseapp.com/__/auth/handler