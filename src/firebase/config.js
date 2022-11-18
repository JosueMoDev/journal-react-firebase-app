// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFireStore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFMl-vtt7oymEjd763622qv4GAeSpWvvQ",
  authDomain: "journalapp-react-8875b.firebaseapp.com",
  projectId: "journalapp-react-8875b",
  storageBucket: "journalapp-react-8875b.appspot.com",
  messagingSenderId: "9266526309",
  appId: "1:9266526309:web:bf6f6e1707e36038d46e8c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFireStore ( FirebaseApp )