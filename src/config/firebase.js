import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsgRCJSsaXcy7Xs1rUDx5ko_jGy4NRdSs",
  authDomain: "web-billing-app.firebaseapp.com",
  databaseURL: "https://web-billing-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-billing-app",
  storageBucket: "web-billing-app.appspot.com",
  messagingSenderId: "700531984520",
  appId: "1:700531984520:web:ce75df1ecd344040c0373d",
  measurementId: "G-CWTTN1TNG5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
