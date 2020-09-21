const express = require('express');
const router = express.Router();
const { Theme } = require('../models/Theme');

router.post('/', async (req, res, next) => {
    try {
        let theme = Theme({
            theme: "themethemetheme",
        });
        await theme.save();
        return res.status(201).send('theme Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;