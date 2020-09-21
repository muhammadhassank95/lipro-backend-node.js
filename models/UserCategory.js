const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const UserCategory = mongoose.model('UserCategories', new mongoose.Schema({
    category: {
        type: String,
        maxlength: 40
    },

}));

exports.UserCategory = UserCategory;