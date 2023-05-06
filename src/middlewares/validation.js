const Joi = require('joi');

function validateRequestBody(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        return next();
    };
}

function validateQueryParams(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.query);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        return next();
    };
}


module.exports = { validateRequestBody, validateQueryParams };
