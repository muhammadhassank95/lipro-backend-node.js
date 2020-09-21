const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Branch = mongoose.model('branches', new mongoose.Schema({
    branch: {
        type: String,
        maxlength: 40
    },
}));

exports.Branch = Branch;