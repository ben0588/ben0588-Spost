import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPhOmoHPIzwn2LHPVa21OOwwREBbmDhoc",
    authDomain: "spostchat-fa585.firebaseapp.com",
    projectId: "spostchat-fa585",
    storageBucket: "spostchat-fa585.appspot.com",
    messagingSenderId: "220742160857",
    appId: "1:220742160857:web:9b81a9b7c4c8e5903bc9c8",
    measurementId: "G-ECX0GW4XPT"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export { db, auth }