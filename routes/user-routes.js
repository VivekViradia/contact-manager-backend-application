const express = require("express");
const {
  registerUser,
  loginUser,
  connectUser,
} = require("../controller/user-controller");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", connectUser);

module.exports = router;
