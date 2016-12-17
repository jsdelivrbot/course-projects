const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// 'middleware' call .... session: false is because passport wants to make cookie based
// request by default
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // dummy route - if they get through requireAuth then run the function
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is abc123' });
  });
  app.post('/signin', requireSignIn, Authentication.signin);
  app.post('/signup', Authentication.signup);

}
