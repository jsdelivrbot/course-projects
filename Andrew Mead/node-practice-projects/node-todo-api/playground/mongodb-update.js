// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connectot to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5887f45ed24764d79bd94eb0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //
  // }).then((result) => {
  //   console.log(result);
  // });




  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5886c959413d32247af324c4')
  }, {
    $set: {
      name: "Brendan"
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false

  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
