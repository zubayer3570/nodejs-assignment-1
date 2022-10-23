const { getRandomUser } = require("../controllers/getRandomUser.controller");
const router = require("express").Router()

router
    .route("/")
    .get(getRandomUser)

module.exports = router;