const Sequelize = require("sequelize");
const dotenv = require("dotenv").config();

const { userModel } = require("./user.model");
const { bookModel } = require("./book.model");
const { ratingModel } = require("./rating.model");
const { commentModel } = require("./comment.model");

const db = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const User = userModel(db);
const Book = bookModel(db);
const Rating = ratingModel(db);
const Comment = commentModel(db);

Book.hasMany(Rating, { foreignKey: "review" });
Rating.belongsTo(Book, { foreignKey: "review" });

Book.hasMany(Comment, { foreignKey: "commenter" });
Comment.belongsTo(Book, { foreignKey: "commenter" });

module.exports = { db, User, Book, Rating, Comment };
