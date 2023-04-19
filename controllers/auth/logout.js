const { basedir } = global;
const { User } = require(`${basedir}/models/users`);

const logout = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).send();
};

module.exports = logout;
