const router = require('express').Router();

const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api/id

router.get('/by-user/:users_id', (req, res) => {
    const {users_id} = req.params;
    db('favorite')
        .where('users_id', users_id)
        .then((favorite) => res.status(200).json({data: favorite}))
        .catch((err) => console.log(err))
});

module.exports = router;