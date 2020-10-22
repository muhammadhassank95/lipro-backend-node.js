const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

Joi.objectId = require('joi-objectid')(Joi);

const branchSchema = new mongoose.Schema({
    branch: {
        type: String,
        maxlength: 40
    },
});

branchSchema.plugin(mongoose_fuzzy_searching, { fields: ["branch"] });
const Branch = mongoose.model('branches', branchSchema);

function validateBranch(branch) {
    const schema = {
        branch: Joi.string().min(2).max(60).required(),
        _id: Joi.objectId(),
    };

    return Joi.validate(branch, schema);
}

exports.Branch = Branch;
exports.validate = validateBranch;