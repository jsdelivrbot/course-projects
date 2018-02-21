const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport'); // not exporting from passport.js so can just use a require statement


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());


// tell express it needs to make use of cookies
// pass a config object
// maxAge = 30 days formula
//
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 *  1000,
      keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


// valid JS - require the authRoutes file that returns a function
// which we immediately call
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// for production environment routing
if (process.env.NODE_ENV === 'production') {
  // Express will serve up produtction assess
  // like our main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);
