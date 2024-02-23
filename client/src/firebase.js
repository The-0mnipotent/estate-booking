// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-39c98.firebaseapp.com",
  projectId: "estate-39c98",
  storageBucket: "estate-39c98.appspot.com",
  messagingSenderId: "512452901617",
  appId: "1:512452901617:web:f755e733b96081602c4750",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
