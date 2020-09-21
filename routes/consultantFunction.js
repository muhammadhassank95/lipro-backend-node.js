const express = require('express');
const router = express.Router();
const { ConsultantFunction } = require('../models/ConsultantFunction');

router.post('/', async (req, res, next) => {
    try {
        let consultantFunction = ConsultantFunction({
            function: "Label of consultant function",
        });
        await consultantFunction.save();
        return res.status(201).send('consultantFunction Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;