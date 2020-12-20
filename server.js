
//dependencies
const express = require('express'),
  path = require('path')
  cors = require('cors'),
  bodyParser = require('body-parser'),
  HTTPlogger = require('morgan'),
  port = process.env.PORT || 3434;

//instantiate express
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(HTTPlogger('dev'));
app.use(express.static(path.join(__dirname, 'client')));

//connnection
app.listen(port, function() {
  console.log("I'm listening on port: " + port);
})
