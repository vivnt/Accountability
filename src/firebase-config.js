import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBeZ7ACFXNen1rHfYl11S09oNMpjWgGSvM",
  authDomain: "accountability-4c3ef.firebaseapp.com",
  databaseURL: "https://accountability-4c3ef.firebaseio.com",
  projectId: "accountability-4c3ef",
  storageBucket: "accountability-4c3ef.appspot.com",
  messagingSenderId: "806564346150"
};

firebase.initializeApp(config);

const db = firebase.firestore()

export default db;