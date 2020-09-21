const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Archive = mongoose.model('archives', new mongoose.Schema({
    date: {
        type: Date,
    },
    report: {
        type: String,
    },
    type: {
        type: Number,
        min: 1,
        max: 2
    },
    reportid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reports',
        required: false
    },
}));

exports.Archive = Archive;