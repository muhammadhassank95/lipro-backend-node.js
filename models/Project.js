const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Project = mongoose.model('projects', new mongoose.Schema({
    active: {
        type: Number,
        min: 0,
        max: 1
    },
    addcostsinfo: {
        type: String,
    },
    addcostsrate: {
        type: Number
    },
    administrationrate: {
        type: Number,
    },
    archived: {
        type: Date,
    },
    assistancerate: {
        type: Number
    },
    comment: {
        type: String
    },
    completionrate: {
        type: Number
    },
    hoursperday: {
        type: Number
    },
    enddate: {
        type: Date,
    },
    internal: {
        type: Number
    },
    dailyproof: {
        type: Number,
        min: 0,
        max: 1
    },
    invoiceaddress: {
        type: String
    },
    management: {
        type: String,
        maxlength: 60
    },
    probability: {
        type: Number
    },
    projectmanagement: {
        type: String,
        maxlength: 60
    },
    projectname: {
        type: String,
        maxlength: 60
    },
    projectno: {
        type: String,
        maxlength: 20
    },
    reference: {
        type: Number,
    },
    registered: {
        type: Date,
    },
    startdate: {
        type: Date,
    },
    secret: {
        type: Number,
    },
    toleranceplaning: {
        type: Number
    },
    toleranceregistering: {
        type: Number
    },
    totaldays: {
        type: Number
    },
    totalfees: {
        type: Number
    },
    totalnet: {
        type: Number
    },
    travelrate: {
        type: Number
    },
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: false
    },
    branchid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'branches',
        required: false
    },
}));

exports.Project = Project;