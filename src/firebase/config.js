import * as firebase from 'firebase/app';
import 'firebase/firestore';
import firebase/firebase;

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

const projectFirebase = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectFirebase, projectFirestore };