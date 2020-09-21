const express = require('express');
const router = express.Router();
const { Lead } = require('../models/Lead');

router.post('/', async (req, res, next) => {
    try {
        let lead = Lead({
            projectname: "Label of projectname",
            comment: "This is comment"
        });
        await lead.save();
        return res.status(201).send('Lead Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;