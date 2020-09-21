const express = require('express');
const router = express.Router();
const { Classification } = require('../models/Classification');

router.post('/', async (req, res, next) => {
    try {
        let classification = Classification({
            classification: "Label of classification",
            probability: 0.5
        });
        await classification.save();
        return res.status(201).send('Classification Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;