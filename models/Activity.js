const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Activity = mongoose.model('activities', new mongoose.Schema({
    activity: {
        type: String,
    },
    initials: {
        type: String,
        maxlength: 6
    },
    shorttext: {
        type: String,
        maxlength: 40
    },
    projectid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects',
        required: false
    },
}));
exports.Activity = Activity;