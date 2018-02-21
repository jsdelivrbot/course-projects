var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js'); // include new db file
var bcrypt = require('bcrypt');


var app = express();
var PORT = process.env.PORT || 3000;
// todo is the model (1 individual todo)
// a set of todos is a collection
var todos = [];
// Increment Id when we add todos (will track before we add DB)
var todoNextId = 1;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
  res.send('Todo API Root -- test heroku');
});

// GET  /todos  -- returns all
// OR   /todos?completed=true -- returns all completed
// {{apiUrl}}/todos?completed=true
// {{apiUrl}}/todos?completed=false
// {{apiUrl}}/todos?completed=true&q=work
app.get('/todos', function(req, res){
  var query = req.query;
  var where = {};

  if(query.hasOwnProperty('completed') && query.completed === 'true'){
    // set where.completed == true
    where.completed = true;
  } else if (query.hasOwnProperty('completed') && query.completed === 'false') {
    where.completed = false;
  }

  if(query.hasOwnProperty('q') && query.q.length > 0) {
    where.description =  {
        $like: '%' + query.q + '%'
      };
  }

  db.todo.findAll({where: where}).then(function (todos){
    res.json(todos);
  }, function (e){
    res.status(500).send();
  })

});


// GET /todos/:id
app.get('/todos/:id', function(req, res) {
  // req.params.id; is always a string so have to convert to a number
  // parseInt(the number, base)
  var todoId = parseInt(req.params.id, 10);

  db.todo.findById(todoId).then(function (todo) {
    // double negative-- taking a value that is not a boolean and converting it to its truthy version
    if(!!todo){
      res.json(todo.toJSON());
    } else {
      res.status(404).send();
    }
  }, function(e){
    res.status(500).send();
  });

});

// POST /todos/
app.post('/todos', function(req, res) {
  //var body = req.body; // user _.pick to keep description and completed
  // _.pick(the object, 'elements to keep')
  var body = _.pick(req.body, 'description', 'completed');

  // Now inserting into database
  db.todo.create(body).then(function (todo){
    res.json(todo.toJSON())
  }, function (e){
    res.status(400).json(e);
  });

});

// DELETE /todos/:id
// same as others -call app.delete with 2 arguments
// 1 url 2 callback
app.delete('/todos/:id', function(req, res) {
  var todoId = parseInt(req.params.id, 10);
  //var matchedTodo = _.findWhere(todos, {id: todoId});

  db.todo.destroy({
    where: {
      id: todoId
    }
  }).then(function (rowsDeleted){
    if (rowsDeleted === 0) {
        res.status(404).json({
          error: "No todo with id"
        });
    } else {
      res.status(204).send();
    }
  }).then(function (){
    res.status(500).send();
  });
});

// PUT /todos/:id
app.put('/todos/:id', function(req, res) {
    // all validation is being done in the model todo.js so no need for validation here
    var todoId = parseInt(req.params.id, 10);
    var body = _.pick(req.body, 'description', 'completed');
    var attributes = {};

    //body.hasOwnProperty('completed');
    if (body.hasOwnProperty('completed')) {
      attributes.completed = body.completed;
    }

    if (body.hasOwnProperty('description')) {
      attributes.description = body.description;
    }
    db.todo.findById(todoId).then(function (todo) { // if findById goes well then fire this function
      if (todo) {
        todo.update(attributes).then(function (todo) { // success callback via promise
          res.json(todo.toJSON());
        }, function (e){   // error callback
          res.status(400).json(e);
        });
      } else {
        res.status(404).send();
      }
    }, function (){ // if findById goes wrong then fire this function
      res.status(500).send();
    });
});



/**************
 *
 *  Users
 *
 **************/
// POST /todos/
app.post('/users', function(req,res) {
          // _.pick (object, then arguments you want to keep)
  var body = _.pick(req.body, 'email', 'password');

  // call user.create returns a promise .then
  // in case of success then get the user back
  // in case of error then send back 400 (sent wrong data)
  db.user.create(body).then(function (user){
    res.json(user.toPublicJSON())
  }, function (e){
    res.status(400).json(e);
  });
});

// POST /users/login
app.post('/users/login', function(req,res) {
  // pick off just email and password
  var body = _.pick(req.body, 'email', 'password');

  db.user.authenticate(body).then(function () {
    res.json(user.toPublicJSON); // things went well
  }, function () {
    res.status(401).send();
  });
  // moved authenticate code to user model
});

db.sequelize.sync().then(function() {
  // start server
  app.listen(PORT, function (){
    console.log('Express listening on port ' + PORT + '!');
  });
});
