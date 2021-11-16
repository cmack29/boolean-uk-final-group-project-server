const express = require("express");

const router = express.Router();

const {
    getAllMembers,
    removeOneMemeber,
    updateOneMember,
    getOneMmber,
    addNewMemberWithProfile
} = require("./controller")

router.get("/:id", getOneMmber);

router.get("/", getAllMembers);

router.post("/add", addNewMemberWithProfile)

router.delete("/:id", removeOneMemeber)

router.patch("/:id", updateOneMember)

module.exports = router;