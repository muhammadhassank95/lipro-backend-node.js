const express = require('express');
const router = express.Router();
const { Classification, validate } = require('../models/Classification');

/* Get Classification*/
router.get('/', async(req, res, next) => {
    try {
        let classification_list = await Classification.find();

        classification_list.sort(function(a, b) {
            var nameA = a.classification.toUpperCase();
            var nameB = b.classification.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return res.status(200).send(classification_list);
    } catch (e) {
        return e;
    }
});

/* Create New Classifications */
router.post('/add-new-classification', async(req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(403).send(error.details[0]);
        let classification = await Classification.find({ classification: req.body.classification });
        if (classification.length) return res.status(409).send({ message: "Classification Already exsists" });
        classification = Classification(req.body);
        await classification.save();
        return res.status(201).send({ classification: classification, message: "Classification Added Successfull" });
    } catch (e) {
        return res.status(500).send({ message: 'Something went wrong' });
    }
});


/*UPDATE Classification */
router.put('/update-classification/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { 
            classification,
            probability
        } = req.body;
        
        const { error } = validate(req.body);

        if (error) return res.status(400).send(error.details[0]);
        let _classification = await Classification.findById(id);
        if (!_classification) return res.status(404).send("No item found");

        let c = await Classification.find({ classification: classification });
        if (c.length) return res.status(409).send({ message: "Name with this classification already exists" });

        _classification = await Classification.findByIdAndUpdate(id, { 
            classification: classification,
            probability: probability 
        }, { new: true });

        return res.send(_classification);
    } catch (e) {
        return res.status(400).send("Something went wrong ");
    }
});

router.delete('/delete-classification/:id', async(req, res, next) => {
    try {
        const { id } = req.params;

        const classification = await Classification.findByIdAndRemove(id);
        if (!classification) return res.status(400).send({ message: "Classification do not exists" });
        return res.status(204).send('Classification Deleted');
    } catch (e) {
        return res.status(400).send({ message: 'Something went wrong' });
    }
});

router.get('/search-classification/:query', async(req, res, next) => {

    try {
        const classification = await Classification.find({ classification: { "$regex": req.params.query, "$options": "i" } });
        return res.status(200).send(classification);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

module.exports = router;