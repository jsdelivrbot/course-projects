// Use just like var
// let name= "Something";
// console.log(name);

var x = 0;

if(true) {
  var x = 12;
  console.log(x);
}
console.log(x); // output 12

// The above prints out 12 two times
// Now use let
// You will get a result of 12 and 0
// let makes the variable only visible inside the curly braces
var x = 0;

if(true) {
  let x = 12;
  console.log(x);
}
console.log(x);

// Using let at the global level
let name = "James";

/*
for (var i = 0; i < 3; i++) {
  console.log(`for loop i = ${i}`)
}
console.log(i); // value of i is now 3
*/

// This would result in an error since i is only defined for the for loop
for (let i = 0; i < 3; i++) {
  console.log(`for loop i = ${i}`)
}
//console.log(i); // Uncomment to see error


function genCallback() {
  let name = "James"
  return function() {
    console.log(`Hello ${name}`);
  }
}
// return a function and call that function
genCallback()();


if (true) {
  var x = 1;
}
console.log(x);

if (true) {
  let y = 1;
}
console.log(y); // error since using let makes y only available inside if block
