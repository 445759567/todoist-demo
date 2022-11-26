
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAEywat2yF5OJaViJbdqiPFliZDQW_D-f8",
    authDomain: "todoist-33595.firebaseapp.com",
    projectId: "todoist-33595",
    storageBucket: "todoist-33595.appspot.com",
    messagingSenderId: "33866713370",
    appId: "1:33866713370:web:26afb8f7f00b2f27fb44a3",
    measurementId: "G-2GYD6PP5E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app as firebase}