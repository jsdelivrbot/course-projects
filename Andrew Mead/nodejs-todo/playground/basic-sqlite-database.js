var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      //notEmpty: true
      len: [1, 250] // only valid if length is 1 or greater and less than 250
    }
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});


//sequelize.sync({force: true}).then(function () {
sequelize.sync().then(function () {
  console.log('Everything is synced');

  // fetch a todo by id if you find it print to screen using tojson  if not found
  // print that the id is not found
  Todo.findById(1).then(function(todo) {
      if(todo) {
        console.log('todo found');
      } else {
        console.log('todo not found');
      }
  });

/*
  Todo.create({
    description: 'Walking my dog',
    completed: false
  }).then(function (todo){
    //console.log('Finished');
    //console.log(todo);
    return Todo.create({
      description: 'Clean house'
    })
  }).then(function(){
    //return Todo.findById(1);
    return Todo.findAll({
      where: {
        description: {
          $like: '%house%'
        }
      }
    });
  }).then(function (todos){
    if(todos) {
      todos.forEach(function (todo) {
        console.log(todo.toJSON());
      })
      //console.log(todos.toJSON());
    } else {
      console.log('no todo found');
    }
  }).catch(function (e){
    console.log(e);
  });
*/
});
