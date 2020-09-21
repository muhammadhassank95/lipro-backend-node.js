const express = require('express');
const router = express.Router();
const { Archive } = require('../models/Archive');

router.post('/', async (req, res, next) => {
    try {
        let archive = Archive({
            date: "2020-09-17T15:43:06.000Z",
            type: 1,
        });
        await archive.save();
        return res.status(201).send('Archive Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;