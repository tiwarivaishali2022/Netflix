// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSErVYP90ieHFWP13qoumZY_9-389pBIo",
  authDomain: "netflix-8a189.firebaseapp.com",
  projectId: "netflix-8a189",
  storageBucket: "netflix-8a189.appspot.com",
  messagingSenderId: "927349449615",
  appId: "1:927349449615:web:0bc757135a0ea400c1e1fa",
  measurementId: "G-6YX61NGSEB"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
