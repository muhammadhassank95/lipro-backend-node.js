const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const User = mongoose.model('users', new mongoose.Schema({
    active: {
        type: Number,
        default: 0,
        min: 0,
        max: 1,
    },
    city: {
        type: String,
    },
    firstname: {
        type: String,
        maxlength: 60
    },
    lastname: {
        type: String,
        maxlength: 60
    },
    mail: {
        type: String,
        maxlength: 100
    },
    startdate: {
        type: Date,
    },
    enddate: {
        type: Date,
    },
    street: {
        type: String,
        maxlength: 60
    },
    title: {
        type: String,
        maxlength: 20
    },
    zipcode: {
        type: String,
        maxlength: 10
    },
    salutation: {
        type: Number,
        min: 1,
        max: 2,
    }
    //countryid
    // categoryid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categories',
    //     required: false
    // },
    // userid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users',
    //     required: false
    // },
}));

exports.User = User;