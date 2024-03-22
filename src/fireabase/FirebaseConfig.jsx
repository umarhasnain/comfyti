// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage ,ref , uploadBytesResumable, getDownloadURL} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAja5Oi5danMFS0MApXyrmKcawOk2R8sNM",
  authDomain: "comfyti.firebaseapp.com",
  projectId: "comfyti",
  storageBucket: "comfyti.appspot.com",
  messagingSenderId: "250086006927",
  appId: "1:250086006927:web:4f8a32c2b55e55308890fa",
  measurementId: "G-DQT622WF5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage1 = getStorage(customApp);
const storage = getStorage(app)

const fireDB = getFirestore(app);
const auth = getAuth(app);



export {fireDB, auth , storage,};