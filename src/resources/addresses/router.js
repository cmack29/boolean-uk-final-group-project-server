const express = require("express");

const router = express.Router()

const {  getAll, updateAddressById} = require("./controller");

router.get("/", getAll)

router.put("/:id", updateAddressById)

module.exports = router;
