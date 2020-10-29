const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const System = mongoose.model('systems', new mongoose.Schema({
    lastarchiving: {
        type: Date,
    },
    hoursperday: {
        type: Number
    },
    toleranceplaning: {
        type: Number
    },
    toleranceregistering: {
        type: Number
    },
    vatrate: {
        type: Number
    },
}));

function validateSystemSettings(classification) {
    const schema = {
        lastarchiving: Joi.date().required(),
        hoursperday: Joi.number().min(0).max(24).required(),
        toleranceplaning: Joi.number().min(-100).max(100).required(),
        toleranceregistering: Joi.number().min(0).max(100).required(),
        vatrate: Joi.number().min(0).max(100).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(classification, schema);
}

exports.System = System;
exports.validate = validateSystemSettings;