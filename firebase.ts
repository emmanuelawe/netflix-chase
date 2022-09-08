// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYlqKvE4PRo-HBEEan15q9D7qeyDBYvE",
  authDomain: "netflix-chase.firebaseapp.com",
  projectId: "netflix-chase",
  storageBucket: "netflix-chase.appspot.com",
  messagingSenderId: "886659981747",
  appId: "1:886659981747:web:5f70928f5b2e6a27e32bc6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth() 

export default app
export {db, auth}