var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require("dotenv");
dotenv.config();//antes que las rutas
const {logeado} = require('./middlewares/logged')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productosRouter = require('./routes/productos');
const noticiasRouter = require('./routes/noticias');
const productsRouter = require('./routes/products');
const categoriasRouter = require('./routes/categorias');
const usuariosRouter = require('./routes/usuarios');
const personas = require('./routes/personas');
const auth = require('./routes/auth');
const perfil = require('./routes/perfil');
const registro = require('./routes/registro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/noticias', noticiasRouter);
app.use('/products', productsRouter);
app.use('/categorias', categoriasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/personas', personas);
app.use('/auth', auth);
app.use('/perfil',logeado, perfil);
app.use('/registro', registro);

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
