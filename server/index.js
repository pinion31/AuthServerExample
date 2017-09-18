// Main starting point of application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
app.use(bodyParser.json({type: '*/*'}));
app.use(morgan('combined'));

const router = require('./router');
router(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:auth/auth');
// App setup




// Server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
