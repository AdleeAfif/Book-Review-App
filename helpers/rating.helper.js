const { Rating } = require("../models");

const createNewRating = async (payload) => {
  return Rating.create({ ...payload });
};

module.exports = { createNewRating };
