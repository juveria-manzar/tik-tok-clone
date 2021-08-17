import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpjmb9iRCEJTP3BX53nCIGGetwc_NblWw",
    authDomain: "reels-react-ace57.firebaseapp.com",
    projectId: "reels-react-ace57",
    storageBucket: "reels-react-ace57.appspot.com",
    messagingSenderId: "812545177297",
    appId: "1:812545177297:web:f6039af8cab50ceadb37f0",
    measurementId: "G-SJTJ33X1GV"
};

firebase.initializeApp(firebaseConfig)