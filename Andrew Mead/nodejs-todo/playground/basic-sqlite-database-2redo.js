var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database-2redo.sqlite'
});



var Todo = sequelize.define('todo', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      //notEmpty: true
      // length is 1 or greater and less than 250
      len: [1, 250]
    }
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

sequelize.sync().then(function (){
    console.log('everything is synced');

    Todo.findById(1).then(function(todo){
      if(todo) {
        console.log(todo.toJSON());
      } else {
        console.log('todo not found');
      }
    });

    /*
    // create new todo item
    // takes an object of all the attributes you want to save
    Todo.create({
      description: 'Walk the dogs',
      completed: false
    }).then(function (todo){
      //console.log('Finished');
      //console.log(todo);
      // callback to create to add more todos
      return Todo.create({
        description: 'Clean the house'
      })
    }).then(function() {
      //fetch data from db
      //return Todo.findById(1);
      return Todo.findAll({
        where: {
          description: {
            $like: '%dog%'
          }
        }
      });
    }).then(function(todos) {
      if(todos){
        todos.forEach(function(todo){
          console.log(todo.toJSON());
        })
        console.log(todos.toJSON());
      } else {
        console.log('no todo found');
      }
    }).catch(function (e){
      console.log(e);
    });
    */
});
