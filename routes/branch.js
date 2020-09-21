const express = require('express');
const router = express.Router();
const { Branch } = require('../models/Branch');

router.post('/', async (req, res, next) => {
    try {
        let branch = Branch({
            branch: "Label of branch",
        });
        await branch.save();
        return res.status(201).send('Branch Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;