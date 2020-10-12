const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

Joi.objectId = require('joi-objectid')(Joi);

const countrySchema = new mongoose.Schema({
    country: {
        type: String,
        maxlength: 40
    },
});

countrySchema.plugin(mongoose_fuzzy_searching, { fields: ["country"] });
const Country = mongoose.model('countries', countrySchema);

function validateCountry(country) {
    const schema = {
        country: Joi.string().min(2).max(60).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(country, schema);
}

exports.Country = Country;
exports.validate = validateCountry;