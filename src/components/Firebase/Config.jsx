/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Szs-jMannXpITRXenxjI-jXTALEvBSM",
  authDomain: "apptest-fa574.firebaseapp.com",
  projectId: "apptest-fa574",
  storageBucket: "apptest-fa574.appspot.com",
  messagingSenderId: "879326141552",
  appId: "1:879326141552:web:ebe8dda8dc9cdcbfd768b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);