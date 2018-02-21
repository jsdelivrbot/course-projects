var person = {
  name: 'James',
  age: 21
}

function updatePerson(obj) {
    //obj = {
    //  name: 'James',
    //  age: 25
    //};

    obj.age = 29;
}


updatePerson(person);
console.log(person);

// Array example
var grades = [15, 90];

// function addGrade takes array and pushes a new value
function addGrade(grades) {
  // this adds to grade passed
  grades.push(50);
  debugger;

  // this does not overwrite the outside grades array
  // grades = [12, 23, 99];
}


addGrade(grades);
console.log(grades);
// 1 new array gets updated using push
// 1 where array doesnt get updated
// call method and console.log new value
