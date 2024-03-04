import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/firestore'

const firebaseConfig = {
    // apiKey:"AIzaSyBMfzGtUckpFUjiPNgCi678ZkcCJWDCpa4",
    apiKey: "AIzaSyBMfzGtUckpFUjiPNgCi678ZkcCJWDCpa4",
    authDomain: "poyo-73304.firebaseapp.com",
    databaseURL: "https://poyo-73304-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "poyo-73304",
    storageBucket: "poyo-73304.appspot.com",
    messagingSenderId: "1044252825166",
    appId: "1:1044252825166:web:f5af8e4630d04bad53151f",
    measurementId: "G-B3K9EF9N6X"
};

let firebaseApp;
if (!getApps().length){
    firebaseApp = initializeApp(firebaseConfig);
}

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { firebaseApp, auth, firestore, storage, provider };