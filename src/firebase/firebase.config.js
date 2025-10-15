import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1FZ7fWlOAtAu2kH57H083EcNqJ9N9QM",
  authDomain: "fierbase-fiter.firebaseapp.com",
  projectId: "fierbase-fiter",
  storageBucket: "fierbase-fiter.firebasestorage.app",
  messagingSenderId: "318751328031",
  appId: "1:318751328031:web:ac0aa68490e819e0c9122a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
