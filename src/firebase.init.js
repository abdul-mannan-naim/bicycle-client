// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAElUBGPUB4GoLKC6R4uRv5yN6ncg-PqZA",
    authDomain: "bicycle-14975.firebaseapp.com",
    projectId: "bicycle-14975",
    storageBucket: "bicycle-14975.appspot.com",
    messagingSenderId: "1096207006448",
    appId: "1:1096207006448:web:8f2c438fc7fe4ab9dfe035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;