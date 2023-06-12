/*import firebase from "firebase";*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyBMH1xuKHAPb4zB8qfR8Z2ZV2Ev8RFqvfU",
    authDomain: "media-api-3e8fa.firebaseapp.com",
    databaseURL: "https://media-api-3e8fa-default-rtdb.firebaseio.com",
    projectId: "media-api-3e8fa",
    storageBucket: "media-api-3e8fa.appspot.com",
    messagingSenderId: "427418323370",
    appId: "1:427418323370:web:86038da69531f43d3443d3"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;