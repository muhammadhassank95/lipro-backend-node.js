const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { AccessRights } = require('../models/AccessRights');

router.post('/', async (req, res, next) => {
    try {
        const access = AccessRights({
            right: 1,
            rightno: 3,
        });
        await access.save();
        return res.status(201).send('access added');
    }
    catch (e) {
        return e;
    }
})

module.exports = router;