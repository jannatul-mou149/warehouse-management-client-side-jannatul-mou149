// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATmAMQYhE_shBYVDJLxA93PRFyccFLHOo",
    authDomain: "automoto-2b5c0.firebaseapp.com",
    projectId: "automoto-2b5c0",
    storageBucket: "automoto-2b5c0.appspot.com",
    messagingSenderId: "839360446181",
    appId: "1:839360446181:web:e7065b282c2f6a92ce9e0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;