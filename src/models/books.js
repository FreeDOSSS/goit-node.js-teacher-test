const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
