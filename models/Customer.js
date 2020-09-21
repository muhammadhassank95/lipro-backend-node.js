const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Customer = mongoose.model('customers', new mongoose.Schema({
    active: {
        type: Number,
        min: 0,
        max: 1
    },
    city: {
        type: String,
        maxlength: 60
    },
    comment: {
        type: String,
    },
    countryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'countries',
        required: false
    },
    faxno: {
        type: String,
        maxlength: 40
    },
    mail: {
        type: String,
        maxlength: 100
    },
    name: {
        type: String,
        maxlength: 60
    },
    phone: {
        type: String,
        maxlength: 40
    },
    shortname: {
        type: String,
        maxlength: 20
    },
    street: {
        type: String,
        maxlength: 60
    },
    zipcode: {
        type: String,
        maxlength: 10
    }
}));

exports.Customer = Customer;