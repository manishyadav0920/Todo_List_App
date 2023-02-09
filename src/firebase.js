// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWaPWfZ6BQTieCyVbGqCHhH0FJ8itZEVg",
  authDomain: "todo-app-1407e.firebaseapp.com",
  projectId: "todo-app-1407e",
  storageBucket: "todo-app-1407e.appspot.com",
  messagingSenderId: "859460209112",
  appId: "1:859460209112:web:24c603f38de1d6f1564aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)