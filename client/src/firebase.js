// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1987.firebaseapp.com",
  projectId: "mern-blog-1987",
  storageBucket: "mern-blog-1987.appspot.com",
  messagingSenderId: "418164055144",
  appId: "1:418164055144:web:cc3035d519d67709152fdd",
  measurementId: "G-119YRR12YP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
