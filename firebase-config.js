// Import the functions you need from the SDKs you need
const firebase = require('firebase');
/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEB-iQKixKVTgRndse8ngUEdrTyz5DdIE",
  authDomain: "restaurant-app-84bd8.firebaseapp.com",
  databaseURL: "https://restaurant-app-84bd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-app-84bd8",
  storageBucket: "restaurant-app-84bd8.appspot.com",
  messagingSenderId: "129084758652",
  appId: "1:129084758652:web:0611bb08b66156c9dc07f9",
  measurementId: "G-HZE5FC1662"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

firebase.innitilizeAoo(firebaseConfig);
const db = firebase.firestore();
const user = db.collection("Users");