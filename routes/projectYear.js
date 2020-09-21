const express = require('express');
const router = express.Router();
const { ProjectYear } = require('../models/ProjectYear');

router.post('/', async (req, res, next) => {
    try {
        let projectYear = ProjectYear({
            totaldays: 11,
            year: 2,
        });
        await projectYear.save();
        return res.status(201).send('ProjectYear Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;