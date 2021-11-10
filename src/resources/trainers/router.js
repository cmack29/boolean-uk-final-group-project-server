const express = require("express")

const {
    getTrainers,
    getOneTrainer, 
    createTrainer
} = require("./controller")

const router = express.Router();

router.get("/", getTrainers);

router.get("/:id", getOneTrainer);

router.post("/", createTrainer)

module.exports = router;
