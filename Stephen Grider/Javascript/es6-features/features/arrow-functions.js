var people = ['James', 'Jack', 'Jonny'];

people.forEach(function (name){
  console.log(name);
});

people.forEach((name) => console.log(name)); // in this case you can use arrows to replace anonymous functions

people.forEach((name) => {
  console.log('Welcome ' + name);
  console.log(name);
});


// original function definition
function add(a,b) {
  return a + b;
}
console.log(add(3,9));

// Implicit
var add = (a,b) => a + b;
console.log(add(10,10));

var add = (a, b) => { return a + b; }   // explicit return
console.log(add(4,3));

// This scenario we need to set var that = this
var person2 = {
  name: 'James',
  likes: ['Running', 'Programming', 'Eating'],
  generateGreeter: function () {
    var that = this;
    return function () {
      console.log(that.name);
    }
  }
};
person2.generateGreeter()();

// Using arrows we don't have to set that = this
var person2 = {
  name: 'James',
  likes: ['Running', 'Programming', 'Eating'],
  generateGreeter: function () {
    return () => {
      console.log(this.name);
    }
  }
};
person2.generateGreeter()();

// Adding a second function in the object and iterating over the array
var person3 = {
  name: 'James',
  likes: ['Running', 'Programming', 'Eating'],
  generateGreeter: function () {
    return () => {
      console.log(this.name);
    }
  },
  printLikes: function () {
    this.likes.forEach((like) => {
      console.log(`${this.name} likes ${this.like}`);
    });
  }
};
person3.printLikes();
