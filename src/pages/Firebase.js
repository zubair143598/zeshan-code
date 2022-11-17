// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr2vsqYlH-3ybd0zOuneEZfdl5aSkcQsY",
  authDomain: "rightcar4u-7dd7b.firebaseapp.com",
  projectId: "rightcar4u-7dd7b",
  storageBucket: "rightcar4u-7dd7b.appspot.com",
  messagingSenderId: "891356883578",
  appId: "1:891356883578:web:4e54f27108675e7ef8e9c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);