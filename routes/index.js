const { Router } = require("express");
const {
  signUphandler,
  loginHandler,
} = require("../controllers/user.controller");
const {
  displayAllBooks,
  sortBooksByTitle,
} = require("../controllers/book.controller");
const { authenticateToken } = require("../utils/jwt.util");
const bookRouter = require("./book.route");

const router = Router();

router.route("/").get(authenticateToken, displayAllBooks);

router.route("/sort").post(authenticateToken, sortBooksByTitle);

router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(loginHandler, (req, res) => {
    res.redirect("/");
  });

router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(signUphandler, (req, res) => {
    res.render("login");
  });

router.use("/book", bookRouter);

module.exports = { router };
