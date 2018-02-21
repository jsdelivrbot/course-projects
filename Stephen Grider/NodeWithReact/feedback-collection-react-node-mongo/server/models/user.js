const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema
const userSchema = new Schema( {
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});


// create a new collection called users
// first time running it will create this in the DB
// after it is created, it will not add it again

// This loads a 'users' schema into the collection
mongoose.model('users', userSchema);
