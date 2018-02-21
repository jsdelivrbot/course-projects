// To run from root dir :: babel-node ./features/template-strings.js --presets es2015
function greet(name = 'James') {
  console.log('Hello ' + name + '!');
  console.log(`Hello ${name}`);
}

greet();
greet('Kate');

console.log(`1 + 6 = ${1 + 6}`);
console.log(`Hey

  This kind of looks like an email

-James
`);
