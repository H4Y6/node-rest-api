const express = require("express");

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/helpers`);
const { auth, upload, manipulateImg } = require(`${basedir}/middlewares`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));
router.patch(
  "/avatars",
  auth,
  manipulateImg,
  upload.single("avatar"),
  ctrlWrapper(ctrl.setAvatar)
);

module.exports = router;
