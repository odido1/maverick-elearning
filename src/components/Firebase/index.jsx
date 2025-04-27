// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE95fp5F5eqZ4YtfXQ-WvqvVDgA2Tmyw8",
  authDomain: "elearning-project-f4484.firebaseapp.com",
  projectId: "elearning-project-f4484",
  storageBucket: "elearning-project-f4484.firebasestorage.app",
  messagingSenderId: "35808428709",
  appId: "1:35808428709:web:155cc8befd1aae8ed3034c",
  measurementId: "G-9BBRV8TYRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(); 
export const db=getFirestore(app);
export default app;