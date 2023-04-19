const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);
const { createError } = require(`${basedir}/helpers`);

const remove = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw createError(404);
  }
  res.json("Contact deleted");
};

module.exports = remove;
