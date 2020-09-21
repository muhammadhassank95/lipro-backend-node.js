const express = require('express');
const router = express.Router();
const { Customer } = require('../models/Customer');
const { Country } = require('../models/Country');

router.post('/', async (req, res, next) => {
    try {
        // let countryid = await Country.findOne({ _id });
        // IF (!countryid) return res.status(403).send("Invalid Country Id")

        let customer = Customer({
            customer: "Label of branch",
            active: 0,
            city: "Lahore",
            comment: "This is comment",
            // countryid: "5f65d8fa04935ba25f5f524c",
            faxno: "11111",
            mail: "hassan@gmail.com",
            name: "hassan",
            phone: "1111",
            shortname: "hasss",
            street: "11",
            zipcode: "54000"
        });
        await customer.save();
        return res.status(201).send('customer Added Successfully');
    }
    catch (e) {
        console.log(e);
        return e;
    }
});

module.exports = router;