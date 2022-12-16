// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBuYwVn0sQC9waC5qyT7_W_lsCFs1ROOhA',
  authDomain: 'streaming-service-clone-fde9f.firebaseapp.com',
  projectId: 'streaming-service-clone-fde9f',
  storageBucket: 'streaming-service-clone-fde9f.appspot.com',
  messagingSenderId: '13649036984',
  appId: '1:13649036984:web:023ade9525455553a3564d',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
