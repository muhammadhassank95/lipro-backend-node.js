const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { Activity } = require('../models/Activity');

router.post('/', async (req, res, next) => {
    try {
        const activity = Activity({
            activity: "This is my activity",
            initials: "These are initials",
            shorttext: "My short text"
        });
        await activity.save();
        return res.status(201).send('Activity Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;