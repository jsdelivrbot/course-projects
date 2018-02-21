function greet(callback) {
  console.log('Hello');

  var data = {
    name: 'brenny'
  };

  callback(data);
}


greet(function(data) {
  console.log('The callback was invoked!');
  console.log(data);
});

greet(function(data) {
  console.log('A different functin was invoked');
  console.log(data.name);
})
