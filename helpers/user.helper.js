const { User } = require("../models");

const createNewUser = (body) => {
  return User.create({ ...body });
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

module.exports = { createNewUser, findUserByEmail };
