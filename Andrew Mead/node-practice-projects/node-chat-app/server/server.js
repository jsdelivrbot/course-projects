const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const clientPath = path.join(__dirname, '../client');
const port = process.env.PORT || 4000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server); // how to communicate

app.use(express.static(clientPath));

/*
event for listen for a connection
(socket) is the individual socket
*/
io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit from Admin to welcome user to chat app
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat'));
  // socket.broadcast.emit from Admin to all other users
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  // data passed from client to server (message)
  // 1st arg event name 2nd arg event data
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server ');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
