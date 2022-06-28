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
    return db("user");
}

function findBy(filter) {
    return db("user").where(filter).first();
}

function findById(id) {
    return db("user").where({id: id}).first();
}

function add(user) {
    return db("user").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("user").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("user").where({id: id}).delete();
}