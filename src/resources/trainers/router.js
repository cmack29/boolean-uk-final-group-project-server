const express = require("express")

const {
    getTrainers,
    getOneTrainer, 
    createTrainer,
    deleteOneTrainer
} = require("./controller")

const router = express.Router();

router.get("/", getTrainers);

router.get("/:id", getOneTrainer);

router.post("/", createTrainer)

router.delete("/:id", deleteOneTrainer)

module.exports = router;
