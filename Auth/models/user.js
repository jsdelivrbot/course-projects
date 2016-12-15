const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
// enfore email unique
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model for other files in the app
module.exports = ModelClass;
