// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVlUhh0-WiSg1C3AjodkYtyPD2YTRIM9Y",
    authDomain: "keep-79493.firebaseapp.com",
    projectId: "keep-79493",
    storageBucket: "keep-79493.appspot.com",
    messagingSenderId: "716279769764",
    appId: "1:716279769764:web:122874160d168950601431",
    measurementId: "G-R3XFR71TN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Get the auth module    