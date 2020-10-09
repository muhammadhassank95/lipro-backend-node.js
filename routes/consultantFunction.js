const express = require('express');
const router = express.Router();
const { ConsultantFunction } = require('../models/ConsultantFunction');

router.get('/', async (req, res, next) => {
    try {
        let country_list = await Country.find();
        return res.status(200).send(country_list);
    } catch (e) {
        return e;
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(403).send(error.details[0]);
        let country = await Country.find({ country: req.body.country });
        if (country.length) return res.status(409).send({ message: "Country Already exsists" });
        country = Country(req.body);
        await country.save();
        return res.status(201).send({ country: country, message: "Country Added Successfull" });
    }
    catch (e) {
        return res.status(500).send({ message: 'Something went wrong' });
    }
});

module.exports = router;