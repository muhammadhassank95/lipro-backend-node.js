const express = require('express');
const router = express.Router();
const { Country } = require('../models/Country');

router.post('/', async (req, res, next) => {
    try {
        let country = Country({
            country: "Label of country"
        });
        await country.save();
        return res.status(201).send('country Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;