const express = require('express');
const router = express.Router();
const { System } = require('../models/System');

router.post('/', async (req, res, next) => {
    try {
        let system = System({
            hoursperday: 11,
            toleranceplaning: 1
        });
        await system.save();
        return res.status(201).send('System Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;