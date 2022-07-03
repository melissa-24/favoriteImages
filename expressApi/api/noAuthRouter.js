const router = require("express").Router()
const Users = require("../users/userModel.js")
const Favorites = require("../favorites/favoritesModel.js")

router.get('/users',( req, res, next) => {
    Users.findAll()
        .then(users => res.status(200).json(users))
        .catch(err => next({ code: 500, message: "Issues getting users"}))
})

router.get('/imgs', (req, res, next) => {
    Favorites.findAll()
        .then(favs => res.status(200).json(favs))
        .catch(err => next ({ code: 500, message: "Error getting imgs"}))
})

module.exports = router;