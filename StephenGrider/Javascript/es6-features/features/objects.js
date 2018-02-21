// To run from command line
// nodemon --exec babel-node objects.js

// ES6 you can just use age without a key value if it is defined
// Same thing for a function (printHello)
var age = 50;

function printHello() {
  console.log("Hello");
}

var person = {
  name: 'James',
  age,
  printHello,
  ['hello' + (3 + 2)]: 'I am here',
  ['hello' + (age + 2)]: 'I am here too',
  printAge () {
    console.log(this.age)
  }
}

console.log(person.hello5);
console.log(person.hello52);

console.log(person.printAge()); // Prints age and undefined because console.log is called 2 times
person.printAge();
