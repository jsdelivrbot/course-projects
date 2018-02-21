const passport = require('passport'); // passport npm module


// Route handler for passport flow
// Internally GoogleStrategy has a string of 'google' we can use as the first argument
// of passport.authenticate



module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // When the user hits this route they have the auth code
  // 3rd argument is a redirect to where you want them to be once logged in
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
