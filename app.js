var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var logger = require('./config/logger');
var errors = require('@feathersjs/errors');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var error = new errors.NotFound();
  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  switch(err.name) {
    case 'CastError':
      err = new errors.BadRequest(`Invalid ${err.path} field`);
      break;
    case 'NotFound':
      err = new errors.NotFound();
      break;
    case 'ValidationError':
      err = new errors.BadRequest(`${err.message.split(':')[2].trim()}`);
      break;
    default: // Internal server error
      err = new errors.GeneralError();
  }

  logger.error(err);
  res.status(err.code);
  res.send(err); 
});

// use ES6 native Promise instead of depricated mongoose Promise
mongoose.Promise = Promise;

// connect to mongo db
mongoose.connect('mongodb://localhost:27017/fcchn-blog').then(
  () => { logger.info('connect to mongo successfully'); },
  err => { logger.info('error on connect mongodb: ', err); }
);

module.exports = app;
