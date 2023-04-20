const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);

const getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, favorite = false } = req.query;
    const { id: owner } = req.user;
    const skip = (page - 1) * limit;
    const result = await Contact.find(
      { owner, favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit: Number(limit),
        favorite,
      }
    ).populate("owner", "email subscription");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
