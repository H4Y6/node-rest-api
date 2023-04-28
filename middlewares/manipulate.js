const Jimp = require("jimp");

const manipulate = async (req, _, next) => {
  try {
    const img = await Jimp.read("img/avatar-raw.jpg");
    img.resize(250, 250); // resize
    img.quality(77);
    img.write("img/avatar.jpg");
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = manipulate;
