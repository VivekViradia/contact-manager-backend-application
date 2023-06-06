const express = require("express");
const {
  registerUser,
  loginUser,
  connectUser,
} = require("../controller/user-controller");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current",validateToken, connectUser);

module.exports = router;
