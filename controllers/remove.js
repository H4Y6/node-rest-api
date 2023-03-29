const { Contact } = require("../models");
const { createError } = require("../helpers");

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
      throw createError(404);
    }
    res.json("Contact deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
