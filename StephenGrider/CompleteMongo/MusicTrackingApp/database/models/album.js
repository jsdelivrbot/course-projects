// Todo: create Album Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Image is a URL
// revenue - might be displayed with a $ but store as raw number
const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

module.exports = AlbumSchema;
