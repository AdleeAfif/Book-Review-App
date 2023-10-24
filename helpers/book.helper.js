const { Book, Rating, Comment } = require("../models");

const getBooks = async () => {
  return Book.findAll({});
};

const createReview = async (data) => {
  return Book.create(data);
};

const getBookById = async (id) => {
  return Book.findByPk(id, { include: [Rating, Comment] });
};

const deleteBookById = async (id) => {
  const book = await getBookById(id);

  await book.destroy();
  return book;
};

const sortBooks = async (sort) => {
  console.log("This is in book helper: " + sort);
  return await Book.findAll({
    order: [["title", sort]],
  });
};

module.exports = {
  getBooks,
  createReview,
  getBookById,
  deleteBookById,
  sortBooks,
};
