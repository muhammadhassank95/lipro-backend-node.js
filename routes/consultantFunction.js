const express = require('express');
const router = express.Router();
const { ConsultantFunction, validate } = require('../models/ConsultantFunction');

/* Get Consultant Function*/
router.get('/', async(req, res, next) => {
    try {
        let consultant_fucntion_list = await ConsultantFunction.find();

        consultant_fucntion_list.sort(function(a, b) {
            var nameA = a._function.toUpperCase();
            var nameB = b._function.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return res.status(200).send(consultant_fucntion_list);
    } catch (e) {
        return e;
    }
});

/* Create New Consultant Function */
router.post('/add-new-consultantFunction', async(req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(403).send(error.details[0]);
        let _function = await ConsultantFunction.find({ _function: req.body._function });
        console.log(_function)
        if (_function.length) return res.status(409).send({ message: "ConsultantFunction Already exsists" });
        _function = ConsultantFunction(req.body);
        await _function.save();
        return res.status(201).send({ _function: _function, message: "ConsultantFunction Added Successfull" });
    } catch (e) {
        console.log('adasd', e)
        return res.status(500).send({ message: 'Something went wrong' });
    }
});

/*UPDATE consultant funtion */
router.put('/update-consultantFunction/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { _function } = req.body;
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0]);
        let __function = await ConsultantFunction.findById(id);
        if (!__function) return res.status(404).send("No item found");

        let c = await ConsultantFunction.find({ _function: _function });
        if (c.length) return res.status(409).send({ message: "Name with this consultant funtion already exists" });

        __function = await ConsultantFunction.findByIdAndUpdate(id, { _function }, { new: true });
        return res.send(__function);
    } catch (e) {
        return res.status(400).send("Something went wrong ");
    }
});

/* Delete ConsultantFunction*/
router.delete('/delete-consultantFunction/:id', async(req, res, next) => {
    try {
        const { id } = req.params;

        const _function = await ConsultantFunction.findByIdAndRemove(id);
        if (!_function) return res.status(400).send({ message: "ConsultantFunction do not exists" });
        return res.status(204).send('ConsultantFunction Deleted');
    } catch (e) {
        return res.status(400).send({ message: 'Something went wrong' });
    }
});


/* Search ConsultantFunction*/
router.get('/search-consultantFunction/:query', async(req, res, next) => {

    try {
        const _function = await ConsultantFunction.find({ _function: { "$regex": req.params.query, "$options": "i" } });
        console.log(_function)
        return res.status(200).send(_function);
    } catch (e) {
        return res.status(500).send(e.message); 
    }
});


module.exports = router;