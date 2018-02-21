var moment = require('moment');

// Show current time
console.log(moment().format());

// Get current unix timestamp
var now = moment();
console.log('Current timestamp ', now.unix());

// Convert timestamp to readable format
var timestamp = 1474474262;
var currentMoment = moment.unix(timestamp);
// http://momentjs.com/docs/#/displaying/
console.log('Current moment ', currentMoment.format());
