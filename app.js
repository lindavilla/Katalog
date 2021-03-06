require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

// mongoose
//   .connect('mongodb://localhost/katalog', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Connects to the database
require('./configs/db');
// Session config
require('./configs/session')(app);


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
// app.locals.title = 'Express - Generated with IronGenerator';

const userRouter = require('./routes/user');
//app.use('/', index);
const authRouter = require('./routes/auth.routes');
//app.use('/', userRouter);
const postRouter = require('./routes/post.routes');
//app.use('/', postsRoutes);


// Routes middleware
app.use('/', userRouter); // <== already included
app.use('/', postRouter); // <== has to be added
app.use('/', authRouter);

module.exports = app;
