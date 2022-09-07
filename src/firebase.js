// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB75nQCXXnG6Cnlt_v9HhFFjAD7Ku3SBw",
  authDomain: "shop-3e83c.firebaseapp.com",
  projectId: "shop-3e83c",
  storageBucket: "shop-3e83c.appspot.com",
  messagingSenderId: "360343085941",
  appId: "1:360343085941:web:8e9f9a934c7e5f0f19693c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app