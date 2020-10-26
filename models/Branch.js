const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Joi.objectId = require('joi-objectid')(Joi);

const Branch = mongoose.model('branches', mongoose.Schema({
    branch: {
        type: String,
        maxlength: 40
    },
}));

function validateBranch(branch) {
    const schema = {
        branch: Joi.string().min(2).max(60).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(branch, schema);
}

exports.Branch = Branch;
exports.validate = validateBranch;