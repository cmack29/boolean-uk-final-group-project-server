const {LOADIPHLPAPI} = require("dns")
// const {member} = require("../../utils/database")
const prisma = require("../../utils/database")

async function getAllMembers(req, res) {
    console.log("res: ", res)

    try {

        const allMembers = await prisma.member.findMany({
            include: {
                classes: true,
                profile: {
                    include: {
                        address: true
                    }
                }
            }
        })
        res.json(allMembers)

    } catch (error) {

        res.status(500).json({error: error.message})

    }
}

async function addNewMemberWithProfile(req, res) {

    const member = req.body;
    console.log("member: ", member)

    const {userName, membershipType, membershipStatus, profile} = member;

    const {picture, firstName, lastname, address} = profile;

    const {
        houseNumber,
        streetName,
        city,
        postcode,
        country
    } = address

    try {

        const newMember = await prisma.member.create({
            data: {
                userName,
                membershipType,
                membershipStatus,
                profile: {
                    create: {
                        picture,
                        firstName,
                        lastname,
                        address: {
                            create: {
                                houseNumber: parseInt(houseNumber),
                                streetName,
                                city,
                                postcode,
                                country
                            }
                        }
                    }
                }
            },
            include: {
                profile: {
                    include: {
                        address: true
                    }
                }
            }
        })

        res.json(newMember)

    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

async function removeOneMemeber(req, res) {

    const id = req.params.id;
    console.log("removeOneMemeber id: ", id)

    console.log("removeOneMemeber body: ", req.body)
    
    try {

        const memeberToDelete = await prisma.member.delete({
            where: {
                id: parseInt(id)
            }
        })

        // to change to delete chain query if figuring out the discrepancy between the id's
        // const transaction = await prisma.$transaction([memeberToDelete, deleteProfile, deleteAddress])
        res.json({deleted: true})

    } catch (error) {

        res.status(500).json({error: error.message})
    }
}

async function updateOneMember(req, res) {

    const id = req.params.id;
    const updatedData = req.body;
    console.log("id: ", id, "\nupdatedData: ", updatedData)

    try {

        const memeberNewDetails = await prisma.member.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ... updatedData
            }
        })

        res.json(memeberNewDetails)

    } catch (error) {

        res.status(500).json({error: error.message})

    }

}

async function getOneMmber(req, res) {

    const id = req.params.id;
    console.log("id: ", id);

    try {
        const memeberById = await prisma.member.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                classes: true,
                profile: {
                    include: {
                        address: true
                    }
                }
            }
        })

        res.json(memeberById)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    getAllMembers,
    getOneMmber,
    removeOneMemeber,
    updateOneMember,
    addNewMemberWithProfile
}
