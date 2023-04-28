const multer = require("multer");
const path = require("path");

const { basedir } = global;
const tempDir = path.join(basedir, "temp");
const storage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;