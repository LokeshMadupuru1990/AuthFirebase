// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuemXWWlWGFv87dEFFrB7YPRWosBSaOoA",
  authDomain: "signinusingfirebase-85e80.firebaseapp.com",
  projectId: "signinusingfirebase-85e80",
  storageBucket: "signinusingfirebase-85e80.appspot.com",
  messagingSenderId: "1027686134203",
  appId: "1:1027686134203:web:3f5b0671a8aa6c2c70d49e",
  measurementId: "G-D40QKGXFW5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
