console.log('Staring notes.js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

// node app.js add --title="secret4" --body="Some body here"
var addNote = (title, body) => {
  // stored in a file where the array of notes has elements that are
  // an object that has a title and a body
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  // check for duplicate notes
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Reading note');
  // fetch notes
  var notes = fetchNotes();
  // notes.filter
  var filteredNotes = notes.filter((note) => note.title === title);
  // return statement
  return filteredNotes[0];

};

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes, removing the one with the title of argument
  var filteredNotes = notes.filter((note) =>  note.title !== title );
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  // same as
  // addNote: addNote
  getAll,
  removeNote,
  getNote,
  logNote
};
