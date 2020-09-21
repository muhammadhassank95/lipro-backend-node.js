const express = require('express');
const router = express.Router();
const { ConsultantCost } = require('../models/ConsultantCost');

router.post('/', async (req, res, next) => {
    try {
        let consultantCost = ConsultantCost({
            month: "2020-12-17T15:43:06.000Z",
        });
        await consultantCost.save();
        return res.status(201).send('consultantCost Added Successfully');
    }
    catch (e) {
        console.log(e);
        return e;
    }
});

module.exports = router;