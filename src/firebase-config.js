import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBeZ7ACFXNen1rHfYl11S09oNMpjWgGSvM",
  authDomain: "accountability-4c3ef.firebaseapp.com",
  databaseURL: "https://accountability-4c3ef.firebaseio.com",
  projectId: "accountability-4c3ef",
  storageBucket: "accountability-4c3ef.appspot.com",
  messagingSenderId: "806564346150"
};

firebase.initializeApp(config);

export default firebase;

export const db = firebase.firestore()
export const auth = firebase.auth()
