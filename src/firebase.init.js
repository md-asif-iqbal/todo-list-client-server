// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBxhaRu9QahWx6JWUIh7iuQ8rAYec4ecI",
  authDomain: "todo-app-dd150.firebaseapp.com",
  projectId: "todo-app-dd150",
  storageBucket: "todo-app-dd150.appspot.com",
  messagingSenderId: "438110404588",
  appId: "1:438110404588:web:48240c6109250a105b0ac9",
  measurementId: "G-E3TPBYB8H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;