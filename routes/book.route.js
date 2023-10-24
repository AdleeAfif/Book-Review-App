const { Router } = require("express");
const { authenticateToken } = require("../utils/jwt.util");
const {
  addReviewHandler,
  displayBookReview,
  removeBookReview,
  updateReviewById,
} = require("../controllers/book.controller");

const router = Router();

router.use(authenticateToken);

router
  .route("/add")
  .get((req, res) => {
    res.render("addReview");
  })
  .post(addReviewHandler);

router.route("/:id").get(displayBookReview).post(updateReviewById);

router.route("/:id/delete").post(removeBookReview);

module.exports = router;
