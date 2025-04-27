// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWyea2HKEPlXARt3Lw9_pOCIZMaO4z5Kc",
  authDomain: "lawyer-appointment-fd3e5.firebaseapp.com",
  projectId: "lawyer-appointment-fd3e5",
  storageBucket: "lawyer-appointment-fd3e5.firebasestorage.app",
  messagingSenderId: "531848229079",
  appId: "1:531848229079:web:6de604639ad12bc7620092",
  measurementId: "G-VN0JVK9XR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
