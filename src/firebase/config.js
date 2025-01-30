// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtWlZQHudZsFZWGf65S7JRd7gGeV8W4k",
  authDomain: "react-cursos-e5bb8.firebaseapp.com",
  projectId: "react-cursos-e5bb8",
  storageBucket: "react-cursos-e5bb8.firebasestorage.app",
  messagingSenderId: "1080296289247",
  appId: "1:1080296289247:web:64a8a199e618d275624a6a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);