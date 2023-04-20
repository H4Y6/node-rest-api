const { basedir } = global;
const { User, schemas } = require(`${basedir}/models/users`);
const { createError } = require(`${basedir}/helpers`);

const updateSubscription = async (req, res) => {
  const { error } = schemas.subscription.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id } = req.user;
  const { subscription } = req.body;
  await User.findByIdAndUpdate(_id, { subscription }, { new: true });
  res.json(subscription);
};

module.exports = updateSubscription;
