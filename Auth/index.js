// Main starting point of Application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '**'}));
router(app);



// Server Setup
// if env variable already defined use that - if not then use 3090
const port = process.env.PORT || 3090;
// http creates a server and everything that comes in gets passed to app
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
