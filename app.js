let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let homeRouter = require('./routes/home');
let playerRouter = require('./routes/player');

let app = express();
const hostname = 'localhost';
const port = '3000';

app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/player', playerRouter);

console.log(`Server running at http://${hostname}:${port}/`);

module.exports = app;