const asyncHandler = require("express-async-handler");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(404).json({ message: "All fields are mandatory" });
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json({ message: "User already registered" });
  }

  // hash Password
  const hashedpassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedpassword);
  const user = await User.create({
    username,
    email,
    password: hashedpassword,
  });
  console.log("User Created:", user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400).json({ message: "User Data is not Valid" });
  }
  res.json({ message: "Register the user" });
});

const loginUser = asyncHandler(async (req, res, next) => {
  res.json({ message: "Login the user" });
});

const connectUser = asyncHandler(async (req, res, next) => {
  res.json({ message: "Connect the user" });
});

module.exports = { registerUser, loginUser, connectUser };
