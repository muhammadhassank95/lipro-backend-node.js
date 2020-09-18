const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Auth = mongoose.model('auths', new mongoose.Schema({
    loginname: {
        type: String,
        required: true,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        maxlength: 60
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
}));

exports.Auth = Auth;