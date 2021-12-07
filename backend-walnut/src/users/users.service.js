const knex = require("../db/connection")

function create(user) {
    return knex("users")
    .insert(user, "*")
    .then((createUser => createUser[0]))
}

function find(user) {
    return knex("users")
    .select("*")
    .where({"username": user.username})
    .andWhere({"password":user.password})
    .first()
}

module.exports = {
    create,
    find
}