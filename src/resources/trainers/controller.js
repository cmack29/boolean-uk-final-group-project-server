const prisma = require("../../utils/database")

async function getTrainers(req, res) { 

    try { 

        const allTrainers = await prisma.trainer.findMany({})

        res.json({data: allTrainers})

    } catch(error) {

        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getTrainers
}