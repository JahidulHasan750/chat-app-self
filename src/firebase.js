
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZFwDb0dlln64JF6J30SIcZ13aTXAUe7I",
  authDomain: "fir-self-2ab52.firebaseapp.com",
  projectId: "fir-self-2ab52",
  storageBucket: "fir-self-2ab52.appspot.com",
  messagingSenderId: "694724609553",
  appId: "1:694724609553:web:028ec9a9e9eb1cfeebd3b0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
