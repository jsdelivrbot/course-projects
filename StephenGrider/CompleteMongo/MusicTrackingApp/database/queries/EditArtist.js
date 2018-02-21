const Artist = require('../models/artist');

/**
 * Edits a single artist in the Artists collection
 * @param {string} _id - The ID of the artist to edit.
 * @param {object} artistProps - An object with a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves when the record is edited
 */
module.exports = (_id, artistProps) => {
  // Find a particular artist (_id) and update them with
  // artistProps properties
  return Artist.update({ _id: _id }, artistProps);
};

/*
age
genre
name
yearsActive
*/
