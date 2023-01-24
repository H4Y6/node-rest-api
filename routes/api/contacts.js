const express = require("express");
const Joi = require("joi");
const contacts = require("../../models/contacts");
const { createError } = require("../../helpers");
const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getById(id);
    if (!result) {
      // return res.status(404).json({ message: "Not found" });
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { name, email, phone } = req.body;
    const result = await contacts.add(name, email, phone);
    res.status(204).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
