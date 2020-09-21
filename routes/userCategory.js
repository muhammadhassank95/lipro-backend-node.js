const express = require('express');
const router = express.Router();
const { UserCategory } = require('../models/UserCategory');

router.post('/', async (req, res, next) => {
    try {
        let userCategory = UserCategory({
            category: "categorycategory",
        });
        await userCategory.save();
        return res.status(201).send('userCategory Added Successfully');
    }
    catch (e) {
        return e;
    }
});

module.exports = router;