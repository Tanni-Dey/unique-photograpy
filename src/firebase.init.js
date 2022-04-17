// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfTKHB8RErwZXtZUz8ohWchknNEnpw2WM",
    authDomain: "unique-photograpy.firebaseapp.com",
    projectId: "unique-photograpy",
    storageBucket: "unique-photograpy.appspot.com",
    messagingSenderId: "29983683614",
    appId: "1:29983683614:web:7a7aed3c4e4d08646bea0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;