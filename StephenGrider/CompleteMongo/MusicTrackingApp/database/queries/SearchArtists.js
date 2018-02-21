const Artist = require('../models/artist');

// Mongo Operators
// https://docs.mongodb.com/manual/reference/operator/
/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  // write query that will follow sort, offset, limites options only
  // do not worry about criteria yet


  // [sortProperty] - is not an array. It is an ES6 interpolated key
  // at run time look at the sortProperty variable, whatever it is = to
  // add that property to this object and then give it a value of 1

  // criteria helper function passed in
  const query = Artist.find(buildQuery(criteria))
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit);

  return Promise.all([query, Artist.find(buildQuery(criteria)).count() ])
    .then((results) => {
      return {
          all: results[0],
          count: results[1],
          offset: offset,
          limit: limit
      };
    });
    /*
    ES5 Solution
      const sortOrder = {};
      sortOrder[sortProperty] = ;
      Artist.find({})
        .sort(sortOrder);
    */

};


const buildQuery = (criteria) => {
  const query = {};

  // $text
  if (criteria.name) {
    query.$text = { $search: criteria.name};
  }



  if(criteria.age) {
    query.age = {
      $gte: criteria.age.min,
      $lte: criteria.age.max
    };
  }

  if (criteria.yearsActive) {
    query.yearsActive = {
      $gte: criteria.yearsActive.min,
      $lte: criteria.yearsActive.max
    };
  }
  return query;
};
