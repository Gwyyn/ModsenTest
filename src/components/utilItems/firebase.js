import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, browserSessionPersistence } from "firebase/auth";

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "city-guide-e0d44.firebaseapp.com",
    projectId: "city-guide-e0d44",
    storageBucket: "city-guide-e0d44.appspot.com",
    messagingSenderId: "593728925451",
    appId: "1:593728925451:web:287cf6b409c36c9c133c0e"
};

export const app = initializeApp(firebaseConfig);
export const  googleAuthProvider = new GoogleAuthProvider();
export const browserSession = browserSessionPersistence