// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFKwTXYYZo0Xsu3gRcWEINh9CtwftY98o",
  authDomain: "reactfinal-9ba7b.firebaseapp.com",
  projectId: "reactfinal-9ba7b",
  storageBucket: "reactfinal-9ba7b.appspot.com",
  messagingSenderId: "1016501950298",
  appId: "1:1016501950298:web:4455ee381552a059e1c563"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export default app;