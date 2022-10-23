const router = require("express").Router()
const { saveUser } = require("../controllers/saveUser.controller");

router
    .route("/")
    .post(saveUser)

module.exports = router;