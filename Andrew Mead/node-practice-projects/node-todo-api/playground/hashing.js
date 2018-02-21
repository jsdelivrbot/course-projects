const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!2';

// call 2 methods to salt
// 10 is the number of rounds - the bigger the number the longer it takes to salt
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash);
  });
});

var hashedPassword = '$2a$10$A/wEp3mCQAuPApss8OVuPu3..f0MItQj6OEqGdTXOZLkL9d/whX6S';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

/* second example */
// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, "123secret");
// console.log(token);
//
//
// var decoded = jwt.verify(token, '123secret');
// //var decoded = jwt.verify(token + '1', '123secret'); // will cause an error
// console.log('decoded', decoded);


/* THIS CODE BELOW RUNS WITHOUT LIBRARIES */


// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
//
//
// var data = {
//   id: 4
// };
// // send back to the user
// // hash property is the hashed value of the data
// // passing in data object
// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecrestsalt').toString()
// }
//
// // man in the middle - will cause else case of if below
// // token.data.id = 5;
// // var resultHash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecrestsalt').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }
