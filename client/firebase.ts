import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqELOLCG9at42Mx9crgPx8ofQYlDWY030",
  authDomain: "e-commerce-8c8cf.firebaseapp.com",
  projectId: "e-commerce-8c8cf",
  storageBucket: "e-commerce-8c8cf.appspot.com",
  messagingSenderId: "766455186325",
  appId: "1:766455186325:web:3f738bbd3640cea953ec9c"
};

export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);

export const FirebaseGoogleProvider = new GoogleAuthProvider()