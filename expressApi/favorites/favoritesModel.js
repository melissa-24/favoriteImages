const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("express_favorite");
}

function findBy(filter) {
    return db("express_favorite").where(filter).first();
}

function findById(id) {
    return db("express_favorite").where({id: id}).first();
}

function add(user) {
    return db("express_favorite").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("express_favorite").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("express_favorite").where({id: id}).delete();
}