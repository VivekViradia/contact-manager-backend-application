const asyncHandler = require("express-async-handler");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "All Fields are Mandatory" });
  }
  const user = await User.findOne({ email });
  // Compare password with HashedPassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      {
        expiresIn: "1m",
      }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401).json({ message: "Email or Password is not valid" });
  }
});

const connectUser = asyncHandler(async (req, res, next) => {
  res.json({ message: "Connect the user" });
});

module.exports = { registerUser, loginUser, connectUser };
