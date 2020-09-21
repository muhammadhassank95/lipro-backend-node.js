const express = require('express');
const router = express.Router();
const { ProjectTime } = require('../models/ProjectTime');

router.post('/', async (req, res, next) => {
    try {
        let projectTime = ProjectTime({
            activity: "aaa",
            hours: 11,
        });
        await projectTime.save();
        return res.status(201).send('ProjectTime Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;