const prisma = require("../../../utils/database");

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

module.exports = { getAll };