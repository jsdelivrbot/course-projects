var PORT    = process.env.PORT || 3000;
var express = require('express');
var app     = express(); // call express as a function
var http    = require('http').Server(app); // start a new server and use this express app as boilerplate
var io      = require('socket.io')(http);
var moment  = require('moment');

app.use(express.static(__dirname + '/public'));

var clientInfo = {};

// Sends current users to provided socket
function sendCurrentUsers(socket) {
  // Use socket id on the socket to figure out what room the user is in
  // once we know that we can look throught the clientInfo object to find other users
  // in the same room. Then pull their names out and concat them into string
  var info = clientInfo[socket.id];
  var users = [];

  if(typeof info === 'undefined') {
    return;
  }
  // Object.keys - takes an object like clientInfo and returns an array of all of the
  // attributes on that object.
  Object.keys(clientInfo).forEach(function (socketId) {
    var userInfo = clientInfo[socketId];

    if(info.room === userInfo.room) {
      users.push(userInfo.name);
    }
  });

  socket.emit('message', {
    name: 'System',
    text: 'Current Users: ' + users.join(', '),
    timestamp: moment.valueOf()
  });
}



// io.on lets you listen for events
// io.on(name of event, when we get event run this function)
io.on('connection', function(socket) {
  console.log('User connected with socket.io');


  socket.on('disconnect', function (){
    var userData = clientInfo[socket.id];
    if(typeof userData !== 'undefined') {
        socket.leave(userData.room);
        io.to(userData.room).emit('message', {
          name: 'System',
          text: userData.name + ' has left!',
          timeStamp: moment().valueOf()
        });
        delete clientInfo[socket.id];
    }
  });

  socket.on('joinRoom', function(req) {
    // socket.id -- dynamic name of chat room
    clientInfo[socket.id] = req;
    socket.join(req.room);
    socket.broadcast.to(req.room).emit('message', {
      name: 'System',
      text: req.name + ' has joined ',
      timestamp: moment().valueOf()
    })
  });

  // make 2 browsers talk to each other
  // 2 args - the name and a callback function
  // this listens to the event
  socket.on('message', function(message) {
    console.log('Message received ' + message.text);

    if (message.text === '@currentUsers') {
      sendCurrentUsers(socket);
    } else {
      message.timestamp = moment().valueOf();
      // only emit the message to people who are in the same room as the user
      io.to(clientInfo[socket.id].room).emit('message', message);
    }
  });

  // send to users
  socket.emit('message', {
    name: 'System',
    text: 'Welcome:',
    timestamp: moment.valueOf()
  });
});

// start server
http.listen(PORT, function() {
    console.log('server started');
});
