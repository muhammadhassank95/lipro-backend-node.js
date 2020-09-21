const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Invoice = mongoose.model('invoices', new mongoose.Schema({
    administrationcosts: {
        type: Number,
    },
    assistencecosts: {
        type: Number,
    },
    comment: {
        type: String,
    },
    // projectid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'countries',
    //     required: false
    // },
    date: {
        type: Date,
    },
    invoiceno: {
        type: String,
        maxlength: 30
    },
    totalfees: {
        type: Number,
    },
    totalgross: {
        type: Number,
    },
    totalnet: {
        type: Number,
    },
    travelcosts: {
        type: Number,
    },
    vat: {
        type: Number,
    },
    vatrate: {
        type: Number,
    }
}));

exports.Invoice = Invoice;