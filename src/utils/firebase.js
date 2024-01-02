// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRp6yJol-KSp3xWObHjDQtWhEeLvoBdok",
  authDomain: "netflixgpt-40656.firebaseapp.com",
  projectId: "netflixgpt-40656",
  storageBucket: "netflixgpt-40656.appspot.com",
  messagingSenderId: "748961910662",
  appId: "1:748961910662:web:da1e4af4ee2b41d81aa607",
  measurementId: "G-M6W6ZYWF0C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
