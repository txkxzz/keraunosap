import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbNNiZJMF38E8SAESjY1jGShVEGkKwGxE",
    authDomain: "autenticacao-dd64d.firebaseapp.com",
    projectId: "autenticacao-dd64d",
    storageBucket: "autenticacao-dd64d.appspot.com",
    messagingSenderId: "733230896147",
    appId: "1:733230896147:web:7184d4a0db722248ac5be6",
    measurementId: "G-DX730P18EV"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);