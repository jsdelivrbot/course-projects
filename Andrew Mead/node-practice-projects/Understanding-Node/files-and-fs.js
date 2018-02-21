var fs = require('fs');

// synchronous call
// waits until it gets the contents of the file until it does the console.log
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // encoding utf8 is not required because it is defaulted to utf8

console.log(greet);

// asynch call
// callback for when you are done prints file contents
var greet2 = fs.readFile(__dirname + '/greet.txt',
  function(err,data) {
    console.log(data); // data is now a buffer full of binary data (contents of the text file)
  });

console.log('Done');
