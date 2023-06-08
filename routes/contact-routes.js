const {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
} = require("../controller/contact-controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllContacts).post(addContact);
router.route("/:id").get(getContactById).delete(deleteContact).put(updateContact);

module.exports = router;
