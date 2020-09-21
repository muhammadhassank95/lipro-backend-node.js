const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const LeadPlan = mongoose.model('leadplans', new mongoose.Schema({
    addcosts: {
        type: Number
    },
    fee: {
        type: Number
    },
    plan2: {
        type: Number
    },
    plan3: {
        type: Number
    },
    probability: {
        type: Number
    },
    year: {
        type: Number
    },
    leadid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads',
        required: false
    },
}));

exports.LeadPlan = LeadPlan;