const router = require('express').Router();
const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api/favorite


// Get Requests
router.get('/', (req, res) => {
    db.select('*')
        .from('favorite')
        .then(favorites => res.status(200).json({data: favorites}))
        .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.select('*')
        .from('favorite')
        .where('id', id)
        .then(favorites => res.status(200).json({data: favorites}))
        .catch((err) => console.log(err));
})


// Post Requests
router.post('/', (req, res) => {
    const favoriteData = req.body;
    db('favorite')
        .insert(favoriteData)
        .then(id => res.status(201).json({data: id}))
        .catch((err) => console.log(err));
});

// Put Request
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('favorite')
        .where('id', id)
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: 'Record numbers changed', count });
            } else {
                res.status(404).json({message: 'that id does not exist'});
            }
        })
        .catch((err) => console.log(err));
});

// Delete Request
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('favorite')
        .where('id', id)
        .delete()
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: 'Number of records deleted', count});
            } else {
                res.status(404).json({message: 'That is not a valid id'});
            }
        })
        .catch((err) => console.log(err));
});


module.exports = router;