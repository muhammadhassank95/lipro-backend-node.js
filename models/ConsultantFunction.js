const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ConsultantFunction = mongoose.model('consultantfunctions', new mongoose.Schema({
    function: {
        type: String,
        maxlength: 40
    },
}));

exports.ConsultantFunction = ConsultantFunction;