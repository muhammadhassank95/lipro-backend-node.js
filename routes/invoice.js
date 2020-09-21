const express = require('express');
const router = express.Router();
const { Invoice } = require('../models/Invoice');

router.post('/', async (req, res, next) => {
    try {
        let invoice = Invoice({
            administrationcosts: 99,
            assistencecosts: 11,
            comment: "My comment text"
        });
        await invoice.save();
        return res.status(201).send('Invoice Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;