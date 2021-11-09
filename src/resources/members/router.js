const express = require("express");

const router = express.Router();

const { getAllMembers } = require("./controller")

router.get("/", getAllMembers);

module.exports = router;