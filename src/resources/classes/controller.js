const prisma = require("../../utils/database");

const getAll = async (req, res) => {
    try {
        const getAllClasses = await prisma.class.findMany({
        });

        res.json(getAllClasses);
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

const createOne = async (req, res) => {

    console.log("body date: ", req.body.classStartDate , "\n body: ", req.body)
    try {
        const createOneClass = await prisma.class.create({
            data: {
                className: req.body.className,
                classType: req.body.classType,
                classStatus: req.body.classStatus,
                classStartDate: new Date(req.body.classStartDate).toISOString(),
                duration: parseInt(req.body.duration)
            }
        })
        res.json({ data: createOneClass })
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

const deleteOne = async (req, res) => {
    const targetId = parseInt(req.params.id)
    try {
        const deleteOneClass = await prisma.class.delete({
            where: {
                id: targetId,
            }
        })
        res.json({ message: "Delete successful" })
    } catch (error) {
        console.error({ error })
    }
}

const updateOne = async (req, res) => {
    try {
        const updateOneClass = await prisma.class.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                className: req.body.className,
                classType: req.body.classType,
                classStatus: req.body.classStatus,
                classStartDate: new Date(req.body.classStartDate),
                duration: parseInt(req.body.duration),
                trainer: {
                    create: {
                        fullName: req.body.trainer.fullName,
                        speciality: req.body.trainer.speciality,
                        qualification: req.body.trainer.qualification,
                        gender: req.body.trainer.gender,
                    }
                }
            },
            include: {
                trainer: true,
                members: true
            }
        })
        res.json({ data: updateOneClass })
    } catch (error) {
        console.error(error)
        res.json({ error })
    }
}

module.exports = { getAll, createOne, deleteOne, updateOne };