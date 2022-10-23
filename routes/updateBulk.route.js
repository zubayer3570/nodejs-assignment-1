const router = require("express").Router()
const { updateBulk } = require("../controllers/updateBulk.controller");

router
    .route("/")
    .patch(updateBulk)

module.exports = router;