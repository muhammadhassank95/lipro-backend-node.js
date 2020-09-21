const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Offer = mongoose.model('offers', new mongoose.Schema({
    addcosts: {
        type: Number
    },
    addcostsinfo: {
        type: String,
        maxlength: 200
    },
    days: {
        type: Number
    },
    decision: {
        type: String,
        maxlength: 200
    },
    decisiondate: {
        type: Date
    },
    fee: {
        type: Number
    },
    mail: {
        type: Number,
        min: 0,
        max: 1,
    },
    offerdate: {
        type: Date
    },
    paper: {
        type: Number,
        min: 0,
        max: 1
    },
    leadid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads',
        required: false
    },
}));

exports.Offer = Offer;