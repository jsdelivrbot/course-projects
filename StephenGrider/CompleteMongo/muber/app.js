const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
// app
const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}



// Place middleware above rotues(app)
app.use(bodyParser.json());
routes(app);

// custome middleware
// next is a function - can call to go to next middleware in chain
// for this to run have to call next in Driver.create function in
// driver_controller.js file
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});



module.exports = app;
