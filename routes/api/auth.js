const express = require("express");

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/contacts`);
const { ctrlWrapper } = require(`${basedir}/helpers`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
