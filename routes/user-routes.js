const express = require("express");
const {
  registerUser,
  loginUser,
  connectUser,
} = require("../controller/user-controller");
const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/current", connectUser);

module.exports = userRouter;
