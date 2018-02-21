var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// Stream
// readable.on('data', function(chunk) {
//   console.log(chunk);
//   writeable.write(chunk);
// });

var compressed = fs.createWriteStream(__dirname + '/greet,txt,gz');
var gzip = zlib.createGzip();

// Piping
readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);
