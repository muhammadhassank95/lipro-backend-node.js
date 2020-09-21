const express = require('express');
const router = express.Router();
const { Project } = require('../models/Project');

router.post('/', async (req, res, next) => {
    try {
        let project = Project({
            addcosts: 11,
            fee: 11,
        });
        await project.save();
        return res.status(201).send('Project Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;