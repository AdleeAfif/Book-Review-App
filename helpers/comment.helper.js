const { Comment } = require("../models");

const createNewComment = async (payload) => {
  return Comment.create({ ...payload });
};

module.exports = { createNewComment };
