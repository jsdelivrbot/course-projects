// var obj = {
//   name: 'James'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
//
// var personString = '{"name": "James", "age": "15"}';
// var person = JSON.parse(personString);
// console.log(person);


const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// originalNoteString  - exercise make this`
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);



var noteString = fs.readFileSync('notes.json');

// note - exercise make this
var note = JSON.parse(noteString);

// make these work
console.log(typeof note); // should be object
console.log(note.title); // should be title
