const expressAsyncHandler = require("express-async-handler");
const {
  getBooks,
  createReview,
  getBookById,
  deleteBookById,
  sortBooks,
} = require("../helpers/book.helper");
const { createNewRating } = require("../helpers/rating.helper");
const { createNewComment } = require("../helpers/comment.helper");

const displayAllBooks = expressAsyncHandler(async (req, res) => {
  const books = await getBooks();
  console.log("Total number of books: " + books.length);
  res.render("main", { books });
});

const displayBookReview = expressAsyncHandler(async (req, res) => {
  const book = await getBookById(req.params.id);
  if (!book) {
    console.log("Specified book not found");
    return res.redirect("/");
  }

  let totalRating = 0;
  for (i = 0; i < book.Ratings.length; i++)
    totalRating += parseFloat(book.Ratings[i].value);

  totalRating = Math.round(totalRating / book.Ratings.length);

  res.render("reviewPage", { book, totalRating });
});

const removeBookReview = expressAsyncHandler(async (req, res) => {
  const book = await getBookById(req.params.id);

  if (!book) {
    console.log("Specified book not found");
    return res.redirect("/");
  }

  await deleteBookById(req.params.id);

  console.log(`Book ${req.params.id} deleted successfully`);
  res.status(202).redirect("/");
});

const addReviewHandler = expressAsyncHandler(async (req, res) => {
  const { title, author, imageUrl, description } = req.body;
  if (!(title && author && imageUrl && description))
    return res.redirect("/book/add");

  const createdReview = await createReview({
    title,
    author,
    imageUrl,
    description,
  });

  console.log(
    `Book ${createdReview.dataValues.title} review has been created successfully`
  );

  res.status(201).redirect("/");
});

const updateReviewById = expressAsyncHandler(async (req, res) => {
  const { rating, newComment } = req.body;

  if (!rating && !newComment) return res.status(400).redirect("back");

  if (!newComment) {
    const addedRating = await createNewRating({
      review: req.params.id,
      value: rating,
    });
    console.log(
      `Book ${addedRating.review} has new rating with value of ${addedRating.value}`
    );
  } else {
    const addedComment = await createNewComment({
      commenter: req.params.id,
      comment: newComment,
    });
    console.log(
      `Book ${addedComment.commentor} has a new comment: ${addedComment.comment}`
    );
  }

  res.status(201).redirect("back");
});

const sortBooksByTitle = expressAsyncHandler(async (req, res) => {
  const { orderValue } = req.body;

  const books = await sortBooks(orderValue);
  console.log("Total number of sorted books: " + books.length);
  res.render("main", { books });
});

module.exports = {
  displayAllBooks,
  addReviewHandler,
  displayBookReview,
  removeBookReview,
  updateReviewById,
  sortBooksByTitle,
};
