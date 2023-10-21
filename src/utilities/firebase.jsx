import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkNBtdTBI7mPLkfSD2yHzwXcln3xQ67JQ",
  authDomain: "express-rest-api-276b6.firebaseapp.com",
  projectId: "express-rest-api-276b6",
  storageBucket: "express-rest-api-276b6.appspot.com",
  messagingSenderId: "457377889275",
  appId: "1:457377889275:web:bc569cf2c94350ebd3e95e",
  measurementId: "G-TTL36YS7Z3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
