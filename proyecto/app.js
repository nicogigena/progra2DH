var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var detallePostRouter = require('./routes/detallePost');
var detalleUsuarioRouter = require('./routes/detalleUsuario');
var usuariosRouter = require('./routes/buscadorUsuarios')
var postsRouter = require('./routes/buscadorPosts');
var logoutRouter = require('./routes/logout');
const db = require('./database/models');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  { secret:'proyecto',
    resave: false,
    saveUninitialized: true }
));
app.use(express.static(path.join(__dirname, 'public')));





app.use(function(req, res, next){
//Si hay cookie y no hay session:
  if(req.cookies.userId != undefined && req.session.user == undefined){ //Si hay Cookie y no hay Session
    db.Usuario.findByPk(req.cookies.userId) //Encontrá al usuario de la cookie
      .then(user=>{
        req.session.user = user; //Envialo a la session
        res.locals.user = user; //Despues envialo a locals
        return next()
      })
  } else if (req.session.user != undefined){//Si hay Session (no importa por qué) Envialo a locals
    res.locals.user = req.session.user
    return next();
  } else {
    return next();
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/detallePost', detallePostRouter);
app.use('/detalleUsuario', detalleUsuarioRouter);
app.use('/buscadorUsuarios', usuariosRouter);
app.use('/buscadorPosts', postsRouter);
app.use('/logout', logoutRouter);



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
