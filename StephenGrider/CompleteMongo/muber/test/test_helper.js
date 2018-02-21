const mongoose = require('mongoose');

// Make sure connected to DB before running tests
before(done => {
  mongoose.connect('mongodb://localhost/muber_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  // add .catch() to handle the first time the suite runs with new DB
  // if you try and drop a collection that does not exist, it will error
  const { drivers } = mongoose.connection.collections;
  drivers.drop()
    .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
    .then(() => done())
    .catch(() => done());
});
