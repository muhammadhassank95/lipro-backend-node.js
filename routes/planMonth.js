const express = require('express');
const router = express.Router();
const { PlanMonth } = require('../models/PlanMonth');

router.post('/', async (req, res, next) => {
    try {
        let planMonth = PlanMonth({
            addcosts: 11,
            fee: 11,
        });
        await planMonth.save();
        return res.status(201).send('PlanMonth Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;