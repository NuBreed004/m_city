import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyB1Q7e-ExmVaF20IrsUhiWqcyb5n8wY-lQ",
    authDomain: "m-city-3e981.firebaseapp.com",
    databaseURL: "https://m-city-3e981.firebaseio.com",
    projectId: "m-city-3e981",
    storageBucket: "m-city-3e981.appspot.com",
    messagingSenderId: "274169746975"
  };

firebase.initializeApp(config);


const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((snapshot)=> {
  console.log(snapshot.val())
})
