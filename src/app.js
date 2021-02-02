const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override'); 
const session = require ("express-session");

const recordameMiddleware = require('./middleware/recordameMiddleware')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: "secreto",
  resave: false,
  saveUninitialized: true,
}));
//tener cuidado  a donde llama al middleware global ya qui si recordameMiddleware lo pongo antes de session rope todo
app.use(recordameMiddleware); 

const indexRouter = require('./routes/index');
const productoRouter = require('./routes/productos');
const userRouter = require('./routes/user');
const carritoRouter = require('./routes/carrito');
const contactoRouter = require("./routes/contacto");
const apiRouter = require('./routes/apiRouter');
const apiRouterUsers = require('./routes/apis/apiUsers');



app.use('/', indexRouter);
app.use('/producto', productoRouter);
app.use('/user', userRouter);
app.use('/api', apiRouter);
app.use('/carrito', carritoRouter);
app.use("/contacto", contactoRouter)
app.use('/api/users', apiRouterUsers);

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
