// Set defaults using es6
// to run from root dir :: babel-node ./features/default.js --presets es2015
function sayHello (name = "World") {
  console.log('Hello ' + name + '!');
}

sayHello("Tom"); // prints Hello Tom
sayHello(); // prints Hello world!

// Using an object example
function greetUser(user = {name: 'Anonymous'}) {
  console.log('Hello ' + user.name + '!');
};

greetUser();
greetUser({name: 'Joe'});
