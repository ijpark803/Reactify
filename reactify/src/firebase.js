// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBC_oCzdtjOJQCSl115Wb1Rf62SlYI0Yz4",
    authDomain: "reactify-ff853.firebaseapp.com",
    projectId: "reactify-ff853",
    storageBucket: "reactify-ff853.firebasestorage.app",
    messagingSenderId: "363709819998",
    appId: "1:363709819998:web:4d5394e8f6a4d5c31118cf",
    measurementId: "G-GDL6CYGMC0"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
