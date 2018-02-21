import firebase from 'firebase';

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

 // Get reference to DB
var firebaseRef = firebase.database().ref();

 firebaseRef.set({
   app: {
     name: 'Todo App Redux',
     version: '1.0.1'
   },
   isRunning: true,
   user: {
     name: 'James',
     age: 39
   },
   todos: {
     '123bacds': {
       text: 'Film some vids'
     }
   }
 });


//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('isRunning').remove();
//
// firebaseRef.child('user').update({
//   'age': null
// })



// firebaseRef.set({
//    isRunning: false,
//    'app/name': 'Todo Application'
// });

// firebaseRef.update({
//   isRunning: true,
//   'app/name': 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// });




// firebaseRef.child('user').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key,snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.update({isRunning: false});
// -------- Challenge
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changes', snapshot.val);
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'Something else'});




// // Challenge
// // Update app name and user name
// firebaseRef.update({
//   'app/name': 'TodoApplication',
//   'user/name': 'Terry'
// });
// // Part2 use child method to update app name and user name
// firebaseRef.child('app').update({
//   name: 'TodoApp Child Update'
// });
// firebaseRef.child('user').update({
//   name: 'Jerry'
// });



//
// var notesRef = firebaseRef.child('notes');
//
// // event listeners
// // child_added child_changed child_removed
// // second arg of .on is callback
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// // Run this then update firebase directly. Should print to console
// // child_changed listener
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
//
//
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the Dogs!'
// });
// console.log('Todo id', newNoteRef.key);


// ----- Arrays challenge
// create variable that store reference
// var todosRef =firebaseRef.child('todos');
// // call on passing in child added event
// todosRef.on('child_added', (snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });
// todosRef.push({
//   text: 'Todo 1'
// });
// todosRef.push({
//   text: 'Todo 2'
// });
