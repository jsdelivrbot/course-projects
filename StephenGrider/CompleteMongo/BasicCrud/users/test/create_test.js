const assert = require('assert');
const User = require('../src/user');

// test creating records
describe('Creating records', () => {
  it('saves a user', () => {
    // using the User model - joe is an instance of User
    // this line does not save to DB
    const joe = new User({ name: ' Joe' });
    // save to the DB
    joe.save()
      .then(() => {
        // has joe been saved successfully?
        assert(!joe.isNew);
        done();
      });
  });
});
