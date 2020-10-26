const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ConsultantFunction = mongoose.model('consultantfunctions', new mongoose.Schema({
    _function: {
        type: String,
        maxlength: 40
    },
}));

function validateConsultantFuntion(_function) {
    const schema = {
        _function: Joi.string().min(2).max(60).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(_function, schema);
}

exports.ConsultantFunction = ConsultantFunction;
exports.validate = validateConsultantFuntion;
