const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const PlanMonth = mongoose.model('planMonths', new mongoose.Schema({
    daysassigned: {
        type: Number
    },
    daysregistered: {
        type: String,
        maxlength: 200
    },
    dayssold: {
        type: Number
    },
    month: {
        type: Number,
    },
    year: {
        type: Number,
    },
    projectid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects',
        required: false
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
}));

exports.PlanMonth = PlanMonth;