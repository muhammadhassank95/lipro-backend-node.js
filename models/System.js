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

exports.System = System;