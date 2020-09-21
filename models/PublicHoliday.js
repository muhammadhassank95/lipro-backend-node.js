const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const PublicHoliday = mongoose.model('publicHolidays', new mongoose.Schema({
    date: {
        type: Date,
    },
    holidayname: {
        type: String,
        maxlength: 40
    },
}));

exports.PublicHoliday = PublicHoliday;