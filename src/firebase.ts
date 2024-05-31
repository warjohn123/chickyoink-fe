// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8_DWrBT1BRAX0lDM035IAPyYrkIPZttA",
  authDomain: "chickyoink-21d9a.firebaseapp.com",
  projectId: "chickyoink-21d9a",
  storageBucket: "chickyoink-21d9a.appspot.com",
  messagingSenderId: "591441108949",
  appId: "1:591441108949:web:817b5cefa44a7a38a7a75c",
  measurementId: "G-ZE7R8DL60Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
