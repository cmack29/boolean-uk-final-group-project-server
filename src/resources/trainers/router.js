const express = require("express")
const { getTrainers } = require("./controller")

const router = express.Router();

router.get("/", getTrainers)

module.exports = router;
