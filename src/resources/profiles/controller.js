const prisma = require("../../utils/database")

const getAll = async (req, res) => {
    try {
      const getAll = await prisma.profile.findMany({});
  
      res.json(getAll);
    } catch (error) {
      console.error({ error });
      res.json({ error });
    }
  };
  
  const updateProfileById = async (req, res) => {
    const { picture, firstName, lastname } = req.body;
    try {
      const updateProfile = await prisma.profile.updateMany({
        where: {
          id: parseInt(req.params.id),
        },
  
        data: {
          ...req.body,
          picture,
          firstName,
          lastname,
        },
      });
      res.json([
          updateProfile.picture,
          updateProfile.firstName,
          updateProfile.lastname,
          updateProfile.address,
      ]);
    } catch (error) {
      console.error({ error });
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { getAll, updateProfileById}