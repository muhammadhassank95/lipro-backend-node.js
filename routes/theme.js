const express = require('express');
const router = express.Router();
const { Theme, validate } = require('../models/Theme');

/* Get Theme*/
router.get('/', async(req, res, next) => {
    try {
        let theme_list = await Theme.find();

        theme_list.sort(function(a, b) {
            var nameA = a.theme.toUpperCase();
            var nameB = b.theme.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return res.status(200).send(theme_list);
    } catch (e) {
        return e;
    }
});

/* Create New Theme */
router.post('/add-new-theme', async(req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(403).send(error.details[0]);

        let theme = await Theme.find({ theme: req.body.theme });
        if (theme.length) return res.status(409).send({ message: "Theme Already exsists" });
        console.log('theme:', theme, req.body)
        theme = Theme(req.body);

        await theme.save();
        console.log('theme11:', theme)

        return res.status(201).send({ theme: theme, message: "Theme Added Successfull" });
    } catch (e) {
        return res.status(500).send({ message: 'Something went wrong' });
    }
});

/*UPDATE Theme */
router.put('/update-theme/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { theme } = req.body;
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0]);
        // let item = await MenuItem.findById(_id);
        let _theme = await Theme.findById(id);
        if (!_theme) return res.status(404).send("No item found");

        let c = await Theme.find({ theme: theme });
        if (c.length) return res.status(409).send({ message: "Name with this theme already exists" });

        _theme = await Theme.findByIdAndUpdate(id, { theme }, { new: true });
        return res.send(_theme);
    } catch (e) {
        return res.status(400).send("Something went wrong ");
    }
});


/* Delete Theme*/
router.delete('/delete-theme/:id', async(req, res, next) => {
    try {
        const { id } = req.params;

        const theme = await Theme.findByIdAndRemove(id);
        if (!theme) return res.status(400).send({ message: "Theme do not exists" });
        return res.status(204).send('Theme Deleted');
    } catch (e) {
        return res.status(400).send({ message: 'Something went wrong' });
    }
});

/* Search Theme*/
router.get('/search-theme/:query', async(req, res, next) => {

    try {
        const theme = await Theme.fuzzySearch({ query: req.params.query });
        return res.status(200).send(theme);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

module.exports = router;