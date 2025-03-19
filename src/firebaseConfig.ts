// src/firebaseConfig.ts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeiW7Cxa2LbP1pV8ywtpZhc6SGNNVykdM",
    authDomain: "darksied-website-a25b8.firebaseapp.com",
    projectId: "darksied-website-a25b8",
    storageBucket: "darksied-website-a25b8.appspot.com",
    messagingSenderId: "978660679344",
    appId: "1:978660679344:web:962c6e6c39f7ba8a27a575",
    measurementId: "G-14FHVK2RWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
