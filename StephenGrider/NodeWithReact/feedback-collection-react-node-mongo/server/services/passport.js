// Passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


// Fetch something from mongoose
const User = mongoose.model('users');

// user is what we pulled out of DB
// done is a callback
passport.serializeUser((user, done) => {
  // first arg is a error object ... just using null for this case
  // user.id is identifying piece of info (the id)
  // this is different from the profile.id below
  // it is the id assigned by mongo
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// Creates a new instance of the GoogleStrategy
// In the constructor tell it how to handle this
// Client ID and Client Secret
// callbackURL - string is the route that the user
// is sent to after they grant permission to our app
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // Take identifying user information and save to db
      // console.log('access token', accessToken);
      // console.log('refresh token', refreshToken);
      // console.log('profile', profile);

      // Search DB to find record if it was inserted already
      // This query returns a promise
      const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          // already have a record with this id
          return done(null, existingUser); // finish the callback - 2nd argument sends back the user found
        }
        // no id so make a new record
        // profile.id is the id coming from the users google profile
        // create a new instance of a user
        // a record that might exist in the DB
        // .save ... takes the record and saves it to the DB
        const user = await new User({
          googleId: profile.id
        }).save();
        done(null, user)  
    }
  )
);
