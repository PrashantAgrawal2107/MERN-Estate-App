// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-63204.firebaseapp.com",
  projectId: "mern-estate-63204",
  storageBucket: "mern-estate-63204.appspot.com",
  messagingSenderId: "695194812953",
  appId: "1:695194812953:web:8627df4f00cf50172ae088"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);