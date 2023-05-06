const booksRouter = require('./books');
const app = require('../app');
const express = require('express');

const indexRouter = express.Router({
    caseSensitive: true,
});

indexRouter.use('/books', booksRouter);

module.exports = indexRouter;
