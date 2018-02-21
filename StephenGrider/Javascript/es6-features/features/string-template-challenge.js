// To run from root dir :: babel-node ./features/string-template-challenge.js --presets es2015
var person = {
  name: 'James',
  age: 30
};

var defaultPerson = {
  name: 'Anonymous',
  age: 0
};

// Create a function that takes the person argument
// default name is anonymous and age is 0
// Hi James Your Age is xx
// Hello anonymous you are 0

// The arg is either equal to the person passed in or the defaultPerson
function greeting(person = defaultPerson) {
    console.log(`Hello ${person.name}`);
}

greeting();
greeting(person);
greeting(person);
