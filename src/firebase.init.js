// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbp61-YaGXbza8wnfNAeSMrhzvmK0pOHs',
  authDomain: 'gym-trainer-2c12c.firebaseapp.com',
  projectId: 'gym-trainer-2c12c',
  storageBucket: 'gym-trainer-2c12c.appspot.com',
  messagingSenderId: '948878268134',
  appId: '1:948878268134:web:b38a3c4495736325638d27',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
