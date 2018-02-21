const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  // min sort by 1 ... get back first artist
  // Find all artists - sort them - limit to the first one - then
  // just get the artist yearsActive. It is still an array but only a single one
  const minQuery = Artist
                      .find({})
                      .sort({ yearsActive: 1 })
                      .limit(1)
                      .then(artists => artists[0].yearsActive);
  // max sort by -1
  const maxQuery = Artist
                      .find({})
                      .sort({ yearsActive: -1 })
                      .limit(1)
                      .then(artists => artists[0].yearsActive);

  return Promise.all([minQuery, maxQuery])
      .then((result) =>  {
        return { min: result[0], max: result[1] };
      });
};
