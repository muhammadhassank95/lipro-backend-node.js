const express = require('express');
const router = express.Router();
const { InvoicePosition } = require('../models/InvoicePosition');

router.post('/', async (req, res, next) => {
    try {
        let invoicePosition = InvoicePosition({
            dailyrate: 99,
            days: 11,
            totalfees: "My comment text"
        });
        await invoicePosition.save();
        return res.status(201).send('invoicePosition Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;