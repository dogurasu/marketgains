// require all necessary modules (almost like packages)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let db = require('./db');

require('dotenv').config();

db.connect();

db.close();

// require Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');

// initialize our application
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// create a virtual path prefix for public folders
app.use('/static', express.static(path.join(__dirname, 'public'))); // register the public directory as 'static' folder
app.use('/static2', express.static(path.join(__dirname, 'second_public'))); // register another static folder

// create db
// app.get('/create_db', (req, res) => {
//     let query = 'CREATE DATABASE marketgains';
//     db_connection.query(query, (err, results, fields) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Created Database.')
//         res.send('Created database');
//     });
// })


// register routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
