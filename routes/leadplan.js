const express = require('express');
const router = express.Router();
const { LeadPlan } = require('../models/LeadPlan');

router.post('/', async (req, res, next) => {
    try {
        let leadPlan = LeadPlan({
            addcosts: 11,
            fee: 11,
        });
        await leadPlan.save();
        return res.status(201).send('lead plan Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;