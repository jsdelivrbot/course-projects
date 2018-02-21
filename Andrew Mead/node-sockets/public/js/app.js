var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);

// Update h1 tag
// jQuery('.room-title').text(room);
// $('.room-title').append('Welcome ' + name + ', you have joined ' + room + ' room');
$('.room-title').append(room + ' chat room');

socket.on('connect', function(){
  console.log('Connected to socket.io server - front end');
  socket.emit('joinRoom', {
    name: name,
    room: room
  });
});

// this is listening to what happens on server.js
// in the io.on socket.emit
socket.on('message', function (message){
  var momentTimestamp = moment.utc(message.timestamp);
  var $messages = jQuery('.messages');
  var $message  = jQuery('<li class="list-group-item"></li>');
  console.log('New message');
  console.log(message.text);
  console.log(name + ' joined ' + room);

  $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:m A') + '</strong></p>');
  $message.append('<p>' + message.text + '</p>');
  $messages.append($message);


});


// handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
  // prevent entire page from refreshing
  event.preventDefault();

  var message = $form.find('input[name=message]');
  // find - search insdie an element
  socket.emit('message', {
    name: name,
    text: message.val()
  });

  // clear contents after submit
  message.val("");
});
