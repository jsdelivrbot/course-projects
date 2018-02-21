console.log('Starting app.js');

const fs = require('fs'); // works with file system
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);


if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  console.log(note);
  if(note) {
    console.log('Note created');
    notes.logNote(note);
  }
  if(note === undefined) {
    console.log("Duplicate file name");
  }

} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
   var note = notes.getNote(argv.title);

   if(note) {
     console.log('Note found');
     notes.logNote(note);
   } else {
      console.log('Note not found');
   }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  // check and set message if note was removed
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
