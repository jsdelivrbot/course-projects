const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;

/*
Do module.exports instead of this

mongoose.model('recipient', recipientSchema);

because this is a sub document collection
*/
