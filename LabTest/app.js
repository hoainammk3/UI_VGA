const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./models/database');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const accountRouter = require('./routes/account');

const passport = require('passport');
const session = require('express-session');
//
const app = express();

// Connect to database
db.connect();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', accountRouter);

// // Sử dụng Passport và session
app.use(passport.initialize());
app.use(passport.session());
// Đặt up phiên làm việc (session)
app.use(session({
  secret: 'eglv bxko aqbh eyws',
  resave: true,
  saveUninitialized: true
}));



module.exports = app;