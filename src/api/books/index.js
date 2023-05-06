const express = require('express');
const BookModel = require('../../models/books');
const {validateQueryParams, validateRequestBody} = require("../../middlewares/validation");

const validators = require("./validators");
const booksRouter = express.Router({
    caseSensitive: true,
})

booksRouter.get('/', validateQueryParams(validators.getAllBooksSchema), getBooks);
booksRouter.get('/:id', getBooksById);
booksRouter.post('/', validateRequestBody(validators.createBookSchema), createBook);
booksRouter.patch('/:id', validateRequestBody(validators.updateBookSchema), updateBook);
booksRouter.delete('/:id', deleteBook);

async function getBooks(req, res) {
    const {limit = 20, page = 0} = req.query;
    const books = await BookModel
        .find()
        .limit(limit)
        .skip(limit * (page - 1));

    res.status(200).json({books}).end();
}

async function getBooksById(req, res) {
    const {id} = req.params;

    const book = await BookModel.findById(id);
    res.status(200).json({book}).end();
}

async function createBook(req, res) {
    const {title, author} = req.body;
    const book = await BookModel.create({title, author});

    res.status(201).json({book}).end();
}

async function updateBook(req, res) {
    const {id} = req.params;
    const {title, author} = req.body;

    const books = await BookModel.findByIdAndUpdate(
        {_id: id},
        {title, author},
        {returnDocument: 'after'}
    )

    res.status(200).json({books}).end()
}

async function deleteBook(req, res) {
    const {id} = req.params;
    await BookModel.findByIdAndDelete(id);
    res.status(204).end();
}

module.exports = booksRouter;
