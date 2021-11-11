const express = require("express");

const { getAll, createOne, deleteOne, updateOne } = require("./controller")

const router = express.Router();

router.get("/", getAll)

router.post("/", createOne)

router.put("/:id", updateOne)

router.delete("/:id", deleteOne)

module.exports = router;