const express = require("express")

const router = express.Router();

const { getTrainers } = require("./controller")

router.get("/", getTrainers)

module.exports = router;
