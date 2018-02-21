const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
  // return Artist.remove({ _id: _id});
  // can be reduced to es6
  return Artist.remove({ _id });


  // Possible alternative solution
  // But not a good idea because it hits the db 2 times
  /*
    return Artist.findById(_id)
      .then((artist) => artist.remove());
  */
};
