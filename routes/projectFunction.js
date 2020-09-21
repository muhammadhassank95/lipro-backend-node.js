const express = require('express');
const router = express.Router();
const { ProjectFunction } = require('../models/ProjectFunction');

router.post('/', async (req, res, next) => {
    try {
        let projectFunction = ProjectFunction({
            addcosts: 11,
            fee: 11,
        });
        await projectFunction.save();
        return res.status(201).send('ProjectFunction Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;