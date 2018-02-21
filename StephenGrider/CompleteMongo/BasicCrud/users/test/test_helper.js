// Any code needed to setup test environment

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// before only runs one time
before((done) => {
  // tell mongoose to connect to mongo - localhost since it is running locally
  // users_test is the database it connects to
  // as soon as you connect to this database it connects for you via mongoose
  mongoose.connect('mongodb://localhost/users_test');

  // once - watch for mongoose to emit an event called open then run this function
  // on - watch for event handler called error
  mongoose.connection
    .once('open', () => {done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  // ES6 code to look at collections and pull off users comments and blogposts
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
