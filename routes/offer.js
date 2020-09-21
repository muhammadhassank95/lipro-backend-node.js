const express = require('express');
const router = express.Router();
const { Offer } = require('../models/Offer');

router.post('/', async (req, res, next) => {
    try {
        let offer = Offer({
            addcosts: 11,
            fee: 11,
        });
        await offer.save();
        return res.status(201).send('offer Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;