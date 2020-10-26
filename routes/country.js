const express = require('express');
const router = express.Router();
const { Country, validate } = require('../models/Country');

/* Get Country*/
router.get('/', async(req, res, next) => {
    try {
        let country_list = await Country.find();

        country_list.sort(function(a, b) {
            var nameA = a.country.toUpperCase();
            var nameB = b.country.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return res.status(200).send(country_list);
    } catch (e) {
        return e;
    }
});

/* Create New Country */
router.post('/add-new-country', async(req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(403).send(error.details[0]);
        let country = await Country.find({ country: req.body.country });
        if (country.length) return res.status(409).send({ message: "Country Already exsists" });
        country = Country(req.body);
        await country.save();
        return res.status(201).send({ country: country, message: "Country Added Successfull" });
    } catch (e) {
        return res.status(500).send({ message: 'Something went wrong' });
    }
});

/*UPDATE Country */
router.put('/update-country/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { country } = req.body;
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0]);
        let _country = await Country.findById(id);
        if (!_country) return res.status(404).send("No item found");

        let c = await Country.find({ country: country });
        if (c.length) return res.status(409).send({ message: "Name with this country already exists" });

        _country = await Country.findByIdAndUpdate(id, { country }, { new: true });
        return res.send(_country);
    } catch (e) {
        return res.status(400).send("Something went wrong ");
    }
});


/* Delete Country*/
router.delete('/delete-country/:id', async(req, res, next) => {
    try {
        const { id } = req.params;

        const country = await Country.findByIdAndRemove(id);
        if (!country) return res.status(400).send({ message: "Country do not exists" });
        return res.status(204).send('CountryDeleted');
    } catch (e) {
        return res.status(400).send({ message: 'Something went wrong' });
    }
});

/* Search Country*/
router.get('/search-country/:query', async(req, res, next) => {

    try {
        const country = await Country.find({ country: { "$regex": req.params.query, "$options": "i" } });

        return res.status(200).send(country);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

module.exports = router;