var Sequelize = require('sequelize');
// set it to process.env.NODE_ENV unless it doesn't exist, then do development
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') { // if running on heroku
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres'
    });
} else {
  sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/dev-todo-api.sqlite'
  });
}

var db = {};

// load all sequelize models
db.todo = sequelize.import(__dirname + '/models/todo.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
