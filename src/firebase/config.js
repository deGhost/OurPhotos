import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7CG3mJgTFkQd-vNLprdHExIwcQReT8To",
    authDomain: "ourphotos-fe536.firebaseapp.com",
    projectId: "ourphotos-fe536",
    storageBucket: "ourphotos-fe536.appspot.com",
    messagingSenderId: "28489640936",
    appId: "1:28489640936:web:2962fd4878ed596382125d",
    measurementId: "G-3N1VPQ113H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFireStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFireStorage, projectFirestore, timestamp };

