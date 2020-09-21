const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ConsultantCost = mongoose.model('consultantcosts', new mongoose.Schema({
    // dailyrate: {
    //     type: Decimal,
    // },
    // report: {
    //     type: Blob,
    // },
    month: {
        type: Date
    },
}));

exports.ConsultantCost = ConsultantCost;