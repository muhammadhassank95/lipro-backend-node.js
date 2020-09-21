const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const AccessRights = mongoose.model('accessRights', new mongoose.Schema({
    right: {
        type: Number,
        min: 0,
        max: 3,
        required: true,
    },
    rightno: {
        type: Number,
        required: true,
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: false
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
}));

exports.AccessRights = AccessRights;