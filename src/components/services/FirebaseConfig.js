import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFnqjgT4BNJb8Mp2gp0oqxooskMLvktug",
    authDomain: "lo-de-tortu.firebaseapp.com",
    databaseURL: "https://lo-de-tortu-default-rtdb.firebaseio.com",
    projectId: "lo-de-tortu",
    storageBucket: "lo-de-tortu.appspot.com",
    messagingSenderId: "470258564580",
    appId: "1:470258564580:web:214463ecd2ce6a7e819bf1",
    measurementId: "G-Z4DY3Y71MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


export default db;