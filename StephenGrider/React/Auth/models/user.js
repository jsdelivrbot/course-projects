const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
// enfore email unique
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On save hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // context of this function is the user model
  // get access to the user model
  const user = this;

  // generate a salt then run callback
  // it takes time to genSalt so pass a callback function
  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err); }

    // hash (encrypt) our password using the salt
    // this will also take time so pass another callback
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      // next() - go and save the model
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  // this.password is a reference to our user model
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}


// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model for other files in the app
module.exports = ModelClass;
