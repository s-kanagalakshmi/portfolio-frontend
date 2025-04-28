// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH3IVPX9TaPOjc14RbdD3y9KPCR12QjcE",
  authDomain: "portfolio-9a9a7.firebaseapp.com",
  projectId: "portfolio-9a9a7",
  storageBucket: "portfolio-9a9a7.firebasestorage.app",
  messagingSenderId: "194765641063",
  appId: "1:194765641063:web:c9415aa0c78ec34aa90bc2",
  measurementId: "G-HGX1MN59RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
