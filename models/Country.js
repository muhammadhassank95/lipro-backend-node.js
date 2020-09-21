const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Country = mongoose.model('countries', new mongoose.Schema({
    country: {
        type: String,
        maxlength: 40
    },
}));

exports.Country = Country;