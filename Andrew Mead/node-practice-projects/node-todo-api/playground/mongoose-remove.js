const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({})
// Remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });



//Todo.findOneAndRemove()
// This works similar to findByIdAndRemove but the big difference if is
// you have to remove by id or some other field
// Todo.findOneAndRemove({_id: '588a4e55779f8c50173187b0'}).then((todo) => {
//
// });


Todo.findByIdAndRemove('588a4e55779f8c50173187b0').then((todo) => {
  console.log(todo);
});
