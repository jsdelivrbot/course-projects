const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });
    // validateSync is a syncronous call
    const validationResult = user.validateSync();
    //console.log(validationResult);
    // Get the mapping to just the error message
    // const message = validationResult.errors.name.message;
    // ES6 equivalent
    const { message } = validationResult.errors.name;

    // Message from user model
    assert(message === 'Name is required');
  });

  it('requires a user\'s name longer than 2 characters', () => {
    const user = new User({ name: 'Al' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name must be longer than 2 characters');
  });

  it('disallows invalid records from being saved', (done) => {
    const user = new User({ name: 'Al' });
    user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters');
        done();
      });
  });
})
