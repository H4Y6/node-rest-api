const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { basedir } = global;
const { User, schemas } = require(`${basedir}/models/users`);
const { createError } = require(`${basedir}/helpers`);
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const faultMessage = "Wrong email or password.";
  if (!user) {
    throw createError(401, faultMessage);
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, faultMessage);
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  const result = await User.findByIdAndUpdate(user._id, { token });
  const { subscription } = result;
  res.json({
    token,
    user: { email, subscription },
  });
};

module.exports = login;
