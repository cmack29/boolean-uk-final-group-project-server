const prisma = require("../../utils/database");

const getAll = async (req, res) => {
    try {
        const getAllClasses = await prisma.class.findMany({
        });

        res.json({ data: getAllClasses });
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

const createOne = async (req, res) => {
    try {
        const createOneClass = await prisma.class.create({
            data: {
                className: req.body.className,
                classType: req.body.classType,
                classStatus: req.body.classStatus,
                classStartDate: new Date(req.body.classStartDate),
                duration: parseInt(req.body.duration)
            }
        })
        res.json({ data: createOneClass })
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

module.exports = { getAll, createOne };