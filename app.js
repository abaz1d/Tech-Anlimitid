var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var i18next = require('i18next');
// var Backend = require('i18next-fs-backend');
// var middleware = require('i18next-http-middleware');

// i18next
//   .use(Backend)
//   .use(middleware.LanguageDetector)
//   .init({
//     // initImmediate: false,
//     lng: 'en',
//     fallbackLng: 'en',
//     preload: ['en', 'id'],
//     ns: ['translation'],
//     defaultNS: 'translation',
//     backend: {
//       loadPath: 'locales/{{lng}}/{{ns}}.json'
//     }
//   });
//   console.log('i18next is ready...')


var indexRouter = require('./routes/index')();
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(middleware.handle(i18next));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
