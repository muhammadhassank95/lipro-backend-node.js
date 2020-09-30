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
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: false
    },
    countryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'countries',
        required: false
    },
}));

function validateUser(user) {
    const schema = {
        firstname: Joi.string().min(2).max(60).required(),
        lastName: Joi.string().min(2).max(60).required(),
        loginname: Joi.string().min(2).max(20).required(),
        active: Joi.number().min(0).max(1).required(),
        salutation: Joi.number().min(1).max(2).required(),
        city: Joi.string().min(2).max(100).required(),
        password: Joi.string().min(5).max(60).required(),
        street: Joi.string().min(0).max(60).required(),
        mail: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
        startdate: Joi.date().required(),
        enddate: Joi.date().required(),
        title: Joi.string().min(2).max(20).required(),
        zipcode: Joi.string().min(2).max(20).required(),
        categoryid: Joi.objectId().required(),
        countryid: Joi.objectId().required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;