const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const User = mongoose.model('users', new mongoose.Schema({
    active: {
        type: Boolean,
        default: true,
    },
    city: {
        type: String,
    },
    firstname: {
        type: String,
        maxlength: 60
    },
    loginname: {
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
    // abbreviation: {
    //     type: String,
    // },
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
    consultantfunctionid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'consultantfunctions',
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
        lastname: Joi.string().min(2).max(60).required(),
        loginname: Joi.string().min(2).max(20).allow(null).optional(),
        active: Joi.bool().allow(null).optional(),
        salutation: Joi.number().min(1).max(2).allow(null).optional(),
        city: Joi.string().min(2).max(100).allow(null).optional(),
        password: Joi.string().min(5).max(60).required(),
        street: Joi.string().min(0).max(60).allow(null).optional(),
        mail: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
        startdate: Joi.date().allow(null).optional(),
        enddate: Joi.date().allow(null).optional(),
        title: Joi.string().min(2).max(20).allow(null).optional(),
        zipcode: Joi.string().min(2).max(20).allow(null).optional(),
        categoryid: Joi.objectId().required(),
        consultantfunctionid: Joi.objectId().allow(null).optional(),
        countryid: Joi.objectId().allow(null).optional(),
        _id: Joi.objectId(),
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;