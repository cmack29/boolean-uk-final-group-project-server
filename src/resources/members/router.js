const express = require("express");

const router = express.Router();

const {
    getAllMembers,
    addNewMember,
    removeOneMemeber,
    updateOneMember,
    getOneMmber
} = require("./controller")

router.get("/:id", getOneMmber);

router.get("/", getAllMembers);

router.post("/", addNewMember);

router.delete("/:id", removeOneMemeber)

router.patch("/:id", updateOneMember)

module.exports = router;