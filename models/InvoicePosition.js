const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const InvoicePosition = mongoose.model('invoicepositions', new mongoose.Schema({
    dailyrate: {
        type: Number,
    },
    days: {
        type: Number,
    },
    totalfees: {
        type: String,
    },
    invoiceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'invoices',
        required: false
    },
}));

exports.InvoicePosition = InvoicePosition;