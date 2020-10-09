const express = require('express');
const router = express.Router();
const { Country, validate } = require('../models/Country');

router.get('/', async (req, res, next) => {
    try {
        let country_list = await Country.find();
        return res.status(200).send(country_list);
    } catch (e) {
        return e;
    }
});


/*UPDATE ITEM */
// router.put('/update-country', async (req, res, next) => {
//     const { _id, country } = req.body;
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0]);

//     try {
//         // let item = await MenuItem.findById(_id);
//         let country = await Country.findById(_id);

//         if (!country) return res.status(404).send("No item found");

//         // if (item.name !== name) {
//         //     item = await MenuItem.findOne({ name });
//         //     if (item) return res.status(409).send("The item with this name already exists");
//         // }

//         country = await Country.findByIdAndUpdate(_id, { country }, { new: true });
//         return res.send(country);
//     } catch (e) {
//         return res.status(400).send("Something went wrong ");
//     }
// });


router.post('/add-new-country', async (req, res, next) => {
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