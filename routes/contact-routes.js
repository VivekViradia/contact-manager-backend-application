const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contact-controller");
const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
router.use(validateToken)


router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContactById).delete(deleteContact).put(updateContact);

module.exports = router;
