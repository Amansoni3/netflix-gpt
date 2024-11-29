import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDexnQm5wbEEN7PmWeqQNuSRimP_k7G5BA",
  authDomain: "netflixgpt-6155a.firebaseapp.com",
  projectId: "netflixgpt-6155a",
  storageBucket: "netflixgpt-6155a.firebasestorage.app",
  messagingSenderId: "880814468513",
  appId: "1:880814468513:web:ff32ceea8540ec76de2fe0",
  measurementId: "G-ZV532LB1RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);