const express = require("express");
const ctrl = require("../../controllers");
const { Contact } = require("../../models");
const { createError } = require("../../helpers");

const Joi = require("joi");
const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:id", ctrl.updateById);

router.patch("/:id/favorite", ctrl.updateStatus);

router.delete("/:id", ctrl.remove);

module.exports = router;
