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


function validateClassification(classification) {
    const schema = {
        classification: Joi.string().min(2).max(60).required(),
        probability: Joi.number().min(0).max(100).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(classification, schema);
}

exports.Classification = Classification;
exports.validate = validateClassification;