const router = require("express").Router()
const { updateUser } = require("../controllers/updateUser.controller");

router
    .route("/")
    .patch(updateUser)

module.exports = router;