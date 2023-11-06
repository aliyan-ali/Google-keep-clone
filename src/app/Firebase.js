// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/app';
import { getAuth,} from 'firebase/auth';


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
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore}


