const express = require('express');
const router = express.Router();
const { ProjectConsultant } = require('../models/ProjectConsultant');

router.post('/', async (req, res, next) => {
    try {
        let projectConsultant = ProjectConsultant({
            addcosts: 11,
            fee: 11,
        });
        await projectConsultant.save();
        return res.status(201).send('Project Consultant Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;