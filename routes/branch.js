const express = require('express');
const router = express.Router();
const { Branch, validate } = require('../models/Branch');

/* Get Branch*/
router.get('/', async(req, res, next) => {
    try {
        let branch_list = await Branch.find();

        branch_list.sort(function(a, b) {
            var nameA = a.branch.toUpperCase();
            var nameB = b.branch.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return res.status(200).send(branch_list);
    } catch (e) {
        return e;
    }
});

/* Create New Branch */
router.post('/add-new-branch', async(req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(403).send(error.details[0]);
        let branch = await Branch.find({ branch: req.body.branch });
        if (branch.length) return res.status(409).send({ message: "Branch Already exsists" });
        branch = Branch(req.body);
        await branch.save();
        return res.status(201).send({ branch: branch, message: "Branch Added Successfull" });
    } catch (e) {
        console.log(e)

        return res.status(500).send({ message: 'Something went wrong' });
    }
});

/*UPDATE Branch */
router.put('/update-branch/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { branch } = req.body;
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0]);
        // let item = await MenuItem.findById(_id);
        let _branch = await Branch.findById(id);
        if (!_branch) return res.status(404).send("No item found");

        let c = await Branch.find({ branch: branch });
        if (c.length) return res.status(409).send({ message: "Name with this branch already exists" });

        _branch = await Branch.findByIdAndUpdate(id, { branch }, { new: true });
        return res.send(_branch);
    } catch (e) {
        return res.status(400).send("Something went wrong ");
    }
});

/* Delete Branch*/
router.delete('/delete-branch/:id', async(req, res, next) => {
    try {
        const { id } = req.params;

        const branch = await Branch.findByIdAndRemove(id);
        if (!branch) return res.status(400).send({ message: "Branch do not exists" });
        return res.status(204).send('BranchDeleted');
    } catch (e) {
        return res.status(400).send({ message: 'Something went wrong' });
    }
});


/* Search Branch*/
router.get('/search-branch/:query', async(req, res, next) => {

    try {
        const branch = await Branch.fuzzySearch({ query: req.params.query });
        return res.status(200).send(branch);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});
module.exports = router;