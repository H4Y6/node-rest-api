const Jimp = require("jimp");

const manipulate = async (tmpPath) => {
  try {
    const img = await Jimp.read(tmpPath);
    img.resize(250, 250); // resize
    img.quality(77);
    img.write(tmpPath);
  } catch (error) {
    console.error(error);
  }
};

module.exports = manipulate;
