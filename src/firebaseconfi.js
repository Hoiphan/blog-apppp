// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhbbBr752en7nly_G1n4sCYPNAncy801o",
  authDomain: "blof-dfsf.firebaseapp.com",
  projectId: "blof-dfsf",
  storageBucket: "blof-dfsf.appspot.com",
  messagingSenderId: "123737815202",
  appId: "1:123737815202:web:3778093b09be9dec35fffb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
