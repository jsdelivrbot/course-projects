import firebase from 'firebase';

try {
  // Connect to firebase
  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyC-hCvl9o9vywlbmneqfAWU5NOC2UV2jkM",
     authDomain: "jb-todo-app.firebaseapp.com",
     databaseURL: "https://jb-todo-app.firebaseio.com",
     storageBucket: "jb-todo-app.appspot.com",
     messagingSenderId: "742237775159"
   };
   firebase.initializeApp(config);

} catch (e) {

}

// Get reference to DB
export var firebaseRef = firebase.database().ref();
export default firebase; // clean up any files that import this one
// so they just import this file and not the firebase module at top
