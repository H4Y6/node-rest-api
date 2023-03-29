const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers");

const Joi = require("joi");
const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateStatus));

router.delete("/:id", ctrlWrapper(ctrl.remove));

module.exports = router;
