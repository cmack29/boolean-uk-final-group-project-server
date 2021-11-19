const prisma = require("../../utils/database")

async function getTrainers(req, res) { 

    try { 

        const allTrainers = await prisma.trainer.findMany({
            include : { 
                classes : true
            }
        })

        res.json(allTrainers)

    } catch(error) {

        res.status(500).json({error: error.message})
    }
}

async function getOneTrainer(req, res) { 

    try { 

        const trainerById = await prisma.trainer.findUnique({
            where : { 
                id : parseInt(req.params.id)
            },
            include : { 
                classes : true
            }
        })

        res.json(trainerById)
    } catch(error) { 
        res.status(500).json({ error : error.message })
    }

}

async function createTrainer(req, res) { 

    const trainerDetails = req.body
    console.log(" new trainer: ", trainerDetails)

    try { 

        const newTrainer = await prisma.trainer.create({ 
            data : { 
                ...trainerDetails
            }
        })

        res.json(newTrainer)

    } catch(error) { 
        
        res.status(500).json({ error : error.message })
    }
}
const deleteOneTrainer = async (req, res) => {
    const targetId = parseInt(req.params.id)
    try {
        const deleteOneTrainer = await prisma.trainer.delete({
            where: {
                id: targetId,
            }
        })
        res.json({ message: "Delete successful" })
    } catch (error) {
        console.error({ error })
    }
}

module.exports = {
    getTrainers,
    getOneTrainer,
    createTrainer,
    deleteOneTrainer
}