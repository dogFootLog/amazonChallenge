import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmB3JM2WYj3A0XUl6PKKjz4wDG6kSPjM4",
  authDomain: "challenge-7a1fc.firebaseapp.com",
  projectId: "challenge-7a1fc",
  storageBucket: "challenge-7a1fc.appspot.com",
  messagingSenderId: "1090915930581",
  appId: "1:1090915930581:web:8a34c8b60687da010b2d5c",
  measurementId: "G-S0PNG86ZHY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
