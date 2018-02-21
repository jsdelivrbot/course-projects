const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', postCount: 0 });
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  }

  it('instance type using set n save', (done) => {
    joe.set('name', 'Alex');
    // save can be used after set
    // User.find({}) -- passing in empty object finds all users in collection
    assertName(joe.save(), done);
  });

  it('A model instance can update', (done) => {
    assertName(joe.update({ name: 'Alex' }), done);
  });

  it('A model class can update', (done) => {
    assertName(
      // Find all records with name of Joe and replace with Alex
      User.update({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('A model class can update one record', (done) => {
    assertName(
      // Fine first user with name Joe and set to Alex
      User.findOneAndUpdate({ name: 'Joe' }, {name: 'Alex'}),
      done
    );
  });

  it('A model class can find a record with an ID and update', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
      done
    );
  });

  it('A user can have their postcount incremented by 1', (done) => {
    // Find every user with the name of Joe
    User.update({ name: 'Joe' }, { $inc: {likes: 10 }})
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.likes === 10);
        done();
      });
  });
  // xit('A user can have their postcount incremented by 1', (done) => {
  //   // Find every user with the name of Joe
  //   User.update({ name: 'Joe' }, { $inc: {postCount: 1 }})
  //     .then(() => User.findOne({ name: 'Joe' }))
  //     .then((user) => {
  //       assert(user.postCount === 1);
  //       done();
  //     });
  // });

});
