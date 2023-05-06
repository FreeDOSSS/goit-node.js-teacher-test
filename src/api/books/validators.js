const Joi = require('joi');


const getAllBooksSchema = Joi.object({
    limit: Joi.number().integer().min(1).max(20).optional(),
    page: Joi.number().integer().min(1).optional(),
})


const createBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
})

const updateBookSchema = Joi.object({
    title: Joi.string().optional(),
    author: Joi.string().optional(),
}).required().min(1);

module.exports = { getAllBooksSchema, createBookSchema, updateBookSchema };
