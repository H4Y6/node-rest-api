const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);

const getAll = async (req, res, next) => {
  try {
    const { id: owner } = req.user;
    const result = await Contact.find(
      { owner },
      "-createdAt -updatedAt"
    ).populate("owner", "email subscription");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
