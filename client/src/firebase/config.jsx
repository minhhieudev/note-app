// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxvUQvviR5Oxooq2Ca2x2QN4f3JDHZR6A",
  authDomain: "note-app-hieudev.firebaseapp.com",
  projectId: "note-app-hieudev",
  storageBucket: "note-app-hieudev.appspot.com",
  messagingSenderId: "490435694258",
  appId: "1:490435694258:web:01c5ae3b34f53c1b1143ab",
  measurementId: "G-SKSV3N3WTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
