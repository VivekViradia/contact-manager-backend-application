const expressAsyncHandler = require("express-async-handler");

const registerUser = expressAsyncHandler(async (req, res, next) => {
  res.json({ message: "Register the user" });
});

const loginUser = expressAsyncHandler(async (req, res, next) => {
  res.json({ message: "Login the user" });
});

const connectUser = expressAsyncHandler(async (req, res, next) => {
  res.json({ message: "Connect the user" });
});

module.exports = { registerUser, loginUser, connectUser };
