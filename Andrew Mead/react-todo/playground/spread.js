var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

// Hi Andrew, you are 25
// Hi Jen, you are 25
function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);


var names = ['Mike', 'Ben'];
var final = ['James', ...names];
// Hi Andrew

console.log(final);
final.forEach(function(name){
  console.log("Hi " + name);
})


/*
var groupA = ['Jen', 'Brendan'];
var groupB = ['Amber', 'Brenny'];
var final  = [3,...groupA,...groupB];
console.log(final)
*/

/*
function add(a,b) {
  return a + b;
}
console.log(add(3,1));
var toAdd = [9,5];
console.log(add(...toAdd));
*/
