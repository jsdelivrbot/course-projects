var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  // x-auth comes from token
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if(!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token; // token stored here 
    next();

  }).catch((e) => {
    res.status(401).send();
  });
}

module.exports = {authenticate};
