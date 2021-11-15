const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  try {
    const getAll = await prisma.address.findMany({});

    res.json(getAll);
  } catch (error) {
    console.error({ error });
    res.json({ error });
  }
};

const updateAddressById = async (req, res) => {
  const { houseNumber, streetName, city, postcode, country } = req.body;
  try {
    const updateAddress = await prisma.address.updateMany({
      where: {
        id: parseInt(req.params.id),
      },

      data: {
        ...req.body,
        houseNumber,
        streetName,
        city,
        postcode,
        country,
      },
    });
    res.json([
        updateAddress.houseNumber,
        updateAddress.streetName,
        updateAddress.city,
        updateAddress.postcode,
        updateAddress.country,
      ]);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, updateAddressById };
