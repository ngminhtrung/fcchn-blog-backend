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
var cors = require('cors');
var app = express();

import jwt from 'jsonwebtoken';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import User from './models/users.model';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// setting up passport
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'MyS3cr3t';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  logger.debug('payload received', jwt_payload);
  User.read(jwt_payload.userId)
    .then(user => {
      if (user) {
        return next(null, user);
      } else {
        return next(null, false);
      }
    });
});

passport.use(strategy);

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var error = new errors.NotFound();
  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  logger.error(err);
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
    case 'NotAuthenticated':
      err = new errors.NotAuthenticated();
      break;
    default: // Internal server error
      err = new errors.GeneralError();
  }

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
