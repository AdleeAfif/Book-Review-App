const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");

const { router } = require("./routes");
const { db } = require("./models");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  db.sync({});
});
