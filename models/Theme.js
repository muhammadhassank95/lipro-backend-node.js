const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Theme = mongoose.model('themes', new mongoose.Schema({
    theme: {
        type: String,
        maxlength: 40
    },

}));

exports.Theme = Theme;