const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const { createNewUser, findUserByEmail } = require("../helpers/user.helper");

const signUphandler = expressAsyncHandler(async (req, res, next) => {
  const { email, password, cPassword } = req.body;

  if (!(email && password)) {
    console.log("Required fields is/are missing");
    return res.redirect("/register");
  }

  if (password !== cPassword) {
    console.log("Passwords are not the same!");
    return res.redirect("/register");
  }

  const user = await findUserByEmail(email);

  if (user) {
    console.log("User already exists");
    return res.redirect("/login");
  }

  const created = await createNewUser({ email, password });

  console.log(
    `User ${created.dataValues.email} account has been created successfully`
  );

  next();
});

const loginHandler = expressAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    console.log(`User ${email} not found`);
    res.redirect("/login");
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    console.log(`User entered invalid password`);
    res.redirect("/login");
  }

  const id = user.id;
  const payload = {
    id,
    email,
  };

  const options = {
    expiresIn: "1h", // Token expiration time (optional)
  };

  const token = jwt.sign(payload, process.env.SECRET_TOKEN, options);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600000,
  });
  next();
});

module.exports = { signUphandler, loginHandler };
