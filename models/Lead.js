const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Lead = mongoose.model('leads', new mongoose.Schema({
    customername: {
        type: String,
        maxlength: 60
    },
    projectname: {
        type: String,
        maxlength: 40
    },
    comment: {
        type: String,
    },
    lead1percent: {
        type: Number
    },
    lead2percent: {
        type: Number
    },
    lead3percent: {
        type: Number
    },
    branchid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'branches',
        required: false
    },
    classificationid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classifications',
        required: false
    },
    lead1id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
    lead2id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
    lead3id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
    themeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'themes'
    }
}));

exports.Lead = Lead;