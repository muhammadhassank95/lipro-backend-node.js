const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ProjectFunction = mongoose.model('projectFunctions', new mongoose.Schema({
    dailyrate: {
        type: Number,
    },
    days: {
        type: Number,
    },
    functionid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'functions',
        required: false
    },
}));

exports.ProjectFunction = ProjectFunction;