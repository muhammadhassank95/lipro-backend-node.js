const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

Joi.objectId = require('joi-objectid')(Joi);

const themeSchema = new mongoose.Schema({
    theme: {
        type: String,
        maxlength: 40
    },
});

themeSchema.plugin(mongoose_fuzzy_searching, { fields: ["theme"] });
const Theme = mongoose.model('themes', themeSchema);

function validateTheme(theme) {
    const schema = {
        theme: Joi.string().min(2).max(60).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(theme, schema);
}


exports.Theme = Theme;
exports.validate = validateTheme;