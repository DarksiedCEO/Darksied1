import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'; // Import the consolidated stylesheet
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAeiW7Cxa2LbP1pV8ywtpZhc6SGNNVykdM',
    authDomain: 'darksied-website-a25b8.firebaseapp.com',
    projectId: 'darksied-website-a25b8',
    storageBucket: 'darksied-website-a25b8.appspot.com',
    messagingSenderId: '978660679344',
    appId: '1:978660679344:web:962c6e6c39f7ba8a27a575',
    measurementId: 'G-14FHWK2RWG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app); // Removed the unused variable warning for 'analytics'

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element.');
}
