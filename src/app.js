const express = require('express');
const cors = require('cors');
const booksRouter = require('./api/books');
const morgan = require('morgan');
const indexRouter = require('./api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(indexRouter);

module.exports = app;
