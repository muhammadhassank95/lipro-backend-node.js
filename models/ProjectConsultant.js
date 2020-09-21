const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ProjectConsultant = mongoose.model('projectConsultants', new mongoose.Schema({
    secret: {
        type: Number,
        min: 0,
        max: 1
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
    projectid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects',
        required: false
    },
    functionid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'functions',
        required: false
    },
}));

exports.ProjectConsultant = ProjectConsultant;