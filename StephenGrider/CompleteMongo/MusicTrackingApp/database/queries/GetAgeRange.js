const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  // min sort by 1 ... get back first artist
  // Find all artists - sort them - limit to the first one - then
  // just get the artist age. It is still an array but only a single one
  const minQuery = Artist
                      .find({})
                      .sort({ age: 1 })
                      .limit(1)
                      .then(artists => artists[0].age);
  // max sort by -1
  const maxQuery = Artist
                      .find({})
                      .sort({ age: -1 })
                      .limit(1)
                      .then(artists => artists[0].age);

  return Promise.all([minQuery, maxQuery])
      .then((result) =>  {
        return { min: result[0], max: result[1] };
      });
};
