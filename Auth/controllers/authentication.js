const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

// take a users id and encode it with secret
// only argument is user model
// jwt have a sub property short for subject
// iat is another jwt property
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // we just need to give them a token

  // req.user is the user object
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // check to make sure both fields are provided
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // see if a user with a given email exists
  // use user model to search entire db model users
  // where email is from the request above
  // second arg is a callback
  User.findOne({ email: email }, function(err, existingUser) {
    if(err) { return next(err); }

    // if a user with email does exist, return an error
    // status 422 is not processable
    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // if a user with email does NOT exist ...
    // create and save user record  in memory
    const user = new User({
      email: email,
      password: password
    });
    // save the user - async operation so it needs a callback
    user.save(function(err) {
      if (err) { return next(err); }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
      //res.json(user);
    });
  });
}
