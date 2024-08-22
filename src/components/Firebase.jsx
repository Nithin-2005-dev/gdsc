// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBhGm9AaNxvON5gKYEfx2h5dmcJ87i81s",
  authDomain: "birthdaybliss-ea756.firebaseapp.com",
  projectId: "birthdaybliss-ea756",
  storageBucket: "birthdaybliss-ea756.appspot.com",
  messagingSenderId: "324810598101",
  appId: "1:324810598101:web:1355073c17b5030037245c",
  measurementId: "G-QM1MBT3SD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const analytics = getAnalytics(app);
export {db};