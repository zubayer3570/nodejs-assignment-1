const { deleteUser } = require("../controllers/deleteUser.controller");
const router = require("express").Router()

router
    .route("/")
    .delete(deleteUser)

module.exports = router;