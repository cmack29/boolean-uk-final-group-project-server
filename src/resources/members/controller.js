const prisma = require("../../utils/database")

async function getAllMembers( req, res){ 
    console.log("res: ", res)

 try {
    
    const allMembers = await prisma.member.findMany({ 
        include : { 
            classes: true
        }
    })

    res.json(allMembers)

 } catch(error) {

    res.status(500).json({error : error.message})

 }
}

module.exports = { 
    getAllMembers
}