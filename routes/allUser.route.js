const { getAllUser } = require("../controllers/getAllUser.controller");
const router = require("express").Router()

router
    .route("/")
    .get(getAllUser)

module.exports = router;