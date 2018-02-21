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

fs.writeFileSync('notes.json', originalNoteString);
