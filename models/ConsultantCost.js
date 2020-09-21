const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ConsultantCost = mongoose.model('consultantcosts', new mongoose.Schema({
    dailyrate: {
        type: Number,
    },
    costsid: {
        type: Number,
    },
    month: {
        type: Date
    },
}));

exports.ConsultantCost = ConsultantCost;