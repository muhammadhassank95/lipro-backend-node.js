const express = require('express');
const router = express.Router();
const { System, validate } = require('../models/System');

router.get('/', async(req, res, next) => {
    try {
        let system = await System.find();
        return res.status(200).send(system);
    } catch (e) {
        return e;
    }
});

router.post('/add-new-system-settings', async(req, res, next) => {
    try {        
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0]);

        let system = System(req.body);
        await system.save();
        return res.status(201).send({ system: system, message: "System Added Successfull" });
    } catch (e) {
        return res.status(500).send({ message: 'Something went wrong' });
    }
});

router.put('/update-system-settings/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { 
            lastarchiving,
            hoursperday,
            toleranceplaning,
            toleranceregistering,
            vatrate,
        } = req.body;
        
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0]);

        let _system = await System.findById(id);
        if (!_system) return res.status(404).send("No item found");

        _system = await System.findByIdAndUpdate(id, { 
            lastarchiving: lastarchiving,
            hoursperday: hoursperday,
            toleranceplaning: toleranceplaning,
            toleranceregistering: toleranceregistering,
            vatrate: vatrate
        }, { new: true });

        return res.send(_system);
    } catch (e) {
        console.log(e)
        return res.status(400).send("Something went wrong ");
    }
});


module.exports = router;