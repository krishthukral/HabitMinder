//Version 9
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzo2eOEqPUCbZW9wXC0UxoaiKTldE6kGo",
  authDomain: "habitminder-dba4c.firebaseapp.com",
  projectId: "habitminder-dba4c",
  storageBucket: "habitminder-dba4c.appspot.com",
  messagingSenderId: "269249719680",
  appId: "1:269249719680:web:14c22e94331aa963bc2565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db, auth };
