const express = require('express');
const router = express.Router();
const { PublicHoliday } = require('../models/PublicHoliday');

router.post('/', async (req, res, next) => {
    try {
        let publicHoliday = PublicHoliday({
            holidayname: "holidaynameholidayname",
        });
        await publicHoliday.save();
        return res.status(201).send('PublicHoliday Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;