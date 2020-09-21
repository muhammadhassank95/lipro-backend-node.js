const express = require('express');
const router = express.Router();
const { ContactPerson } = require('../models/ContactPerson');

router.post('/', async (req, res, next) => {
    try {
        let contactPerson = ContactPerson({
            active: 1,
            firstname: "Hassan",
            lastname: "khan",
            mail: "muhammad@gmail.com",
            phone: "03437867601",
            salutation: 1,
            title: "Contact person"
        });
        await contactPerson.save();
        return res.status(201).send('contactPerson Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;