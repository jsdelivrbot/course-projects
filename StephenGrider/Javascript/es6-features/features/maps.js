// Maps used for storing key value pairs
var myMap = new Map();

// Set
myMap.set('name', 'James');
// Get
console.log(myMap.get('name'));

// Has - if existing key has a value - returns boolean
console.log(myMap.has('age')); // returns false

myMap.set('age',30);
console.log(myMap.has('age')); // returns true

// Delete
myMap.delete('name');

// Clear
myMap.clear();

// Size
console.log(myMap.size);

// basic object
var user = {name: 'James'};
myMap.set(user, 'Toronto');
console.log(myMap.get(user));

//
var myMap = new Map();
myMap.set(1, 'James');
myMap.set(2, 'Terry');
myMap.set(3, 'Ben');

console.log([...myMap]);
console.log(myMap.keys());
console.log(myMap.values());

// Challenge to get and set weather at location
var location = {name: 'Toronto'};
var secondLocation = {name: 'Oslo'};

var weather = new Map();

function setWeather (location, temp) {
  weather.set(location, temp);

  return weather;
}

function printWeather (location) {
  // if there is weather print message
  // if no weather say no weather recorded
  if (weather.has(location)) {
    console.log(`It's ${weather.get(location)} in ${location.name}`);
  } else {
    console.log(`No weather recorded for ${location.name}`);
  }
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);
