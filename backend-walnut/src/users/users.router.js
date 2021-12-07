const router = require("express").Router()
const controller = require("./users.controller")

router.route("/new")
    .post(controller.createUser)

router.route("/")//POST METHOD TO UTILIZE REQUEST BODY
    .get(controller.auth)
    .post(controller.findUser)

module.exports = router