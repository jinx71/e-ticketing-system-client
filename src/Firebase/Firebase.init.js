// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcDzlbrnPxdqoRd8CwLV-aQ-4_vlwuG9M",
    authDomain: "e-ticketing-system-client.firebaseapp.com",
    projectId: "e-ticketing-system-client",
    storageBucket: "e-ticketing-system-client.appspot.com",
    messagingSenderId: "414471388313",
    appId: "1:414471388313:web:c8e57f98f465ab813d4c08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);