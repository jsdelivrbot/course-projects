// anything you can do with a regular variable you can do with a const
// you just cannot change them once set
const PORT = 3000;

console.log(PORT);

// This will cause an error if uncommented
//var PORT = 3001;


// You can do something like this though to get 3001
console.log(PORT + 1);

// The config is a constant and cannot be upadated
// but the object attribute is not a constant so it can be updated
const CONFIG = {
  PORT: 3000
};

console.log(CONFIG);
CONFIG.PORT = 3001;
console.log(CONFIG);
