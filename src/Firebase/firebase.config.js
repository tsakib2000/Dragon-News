// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRsQrOGIrV7Nm7rtNHFGfFhQBHGXsZM_Y",
  authDomain: "dragon-news-328b7.firebaseapp.com",
  projectId: "dragon-news-328b7",
  storageBucket: "dragon-news-328b7.firebasestorage.app",
  messagingSenderId: "208345211575",
  appId: "1:208345211575:web:3ca95695dcaf1a10cae332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth