const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ProjectTime = mongoose.model('projectTimes', new mongoose.Schema({
    activity: {
        type: String,
    },
    hours: {
        type: Number,
    },
    initials: {
        type: String,
        maxlength: 6
    },
    date: {
        type: Date,
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

exports.ProjectTime = ProjectTime;