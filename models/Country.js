const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Country = mongoose.model('countries', new mongoose.Schema({
    country: {
        type: String,
        maxlength: 40
    },
}));

function validateCountry(country) {
    const schema = {
        country: Joi.string().min(2).max(60).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(country, schema);
}

exports.Country = Country;
exports.validate = validateCountry;