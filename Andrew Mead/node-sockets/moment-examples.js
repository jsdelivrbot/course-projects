// http://momentjs.com/docs/
var moment = require('moment');
var now = moment();


// get the current timestamp
console.log(now.format());

console.log(now.format('h:m A')); // 6:45 PM

// Subtract 1 year from timestamp
now.subtract(1, 'year');
console.log(now.format());

// Jan 23rd 2015, 4:27 PM
console.log(now.format('MMM Do YYYY, h:m A'));

/*
 * Unix time stamps
 */
 // current unix timestamp - seconds since jan 1 1970
 console.log(now.format('X'));
 // miliseconds since jan 1 1970
 console.log(now.format('x'));

// convert timestamp to more readable time
 var timestamp = 1422049247369;
 var timestampMoment = moment.utc(timestamp);

 console.log(timestampMoment.format());
 console.log(timestampMoment.local().format('h:m a'));
