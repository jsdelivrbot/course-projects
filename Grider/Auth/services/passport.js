const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Strategy for sign in
// Attempt to auth using only email and password
// Create local strategy
// LocalStrategy assumes a username and password. We can change this here
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // this callback verified this email and password, call done with the user
  // if it is correct email and password
  // otherwise, call done with false

  // find exising user in db - use the user model
  User.findOne({ email: email.toLowerCase() }, function(err, user) {
    if (err) { return done(err); }

    if(!user) { return done(null, false); }

    // compare passwords - is 'password' equal to user.password?
    // compare enctyped password to plain password
    user.comparePassword(password, function(err, isMatch) {
        if (err) { return done(err); }

        if(!isMatch) { return done(null, false); }

        return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};



// create JWT strategy
// second arg is a function called whenever a user tried to login
// payload is the decoded JWT token.
// done is a callback function we need to call depending on if we can auth the user
// done should see if the user ID in the payload exists in our database
// if it does call 'done' with that user
// otherwise call done without a user object
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // look for a user
  User.findById(payload.sub, function(err, user) {
      // if err then we did not find a user so false ....
      if(err) { return done(err, false); }

      if(user) {
        done(null, user);
      } else {
        done(null, false);
      }
  });
});


// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
