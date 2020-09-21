const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const ContactPerson = mongoose.model('contactpersons', new mongoose.Schema({
    active: {
        type: Number,
        min: 0,
        max: 1
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
    phone: {
        type: String,
        maxlength: 40
    },
    salutation: {
        type: Number,
        min: 1,
        max: 2
    },
    title: {
        type: String,
        maxlength: 20
    },
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: false
    },
}));

exports.ContactPerson = ContactPerson;