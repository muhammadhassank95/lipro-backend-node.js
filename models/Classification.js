const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Classification = mongoose.model('classifications', new mongoose.Schema({
    classification: {
        type: String,
        maxlength: 40
    },
    probability: {
        type: Number,
    },
}));

exports.Classification = Classification;