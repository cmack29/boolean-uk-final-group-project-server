const express = require("express");

const router = express.Router();

const { getAll, updateProfileById } = require("./controller");

router.get("/", getAll)

router.put("/:id", updateProfileById)

module.exports = router;
