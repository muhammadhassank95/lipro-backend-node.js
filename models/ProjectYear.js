const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ProjectYear = mongoose.model('projectYears', new mongoose.Schema({
    totaldays: {
        type: Number,
    },
    year: {
        type: Number,
    },
    functionid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'functions',
        required: false
    },
}));

exports.ProjectYear = ProjectYear;