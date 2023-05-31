const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ message: "Get all contacts" });
});

const getContactById = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .json({ message: `Get contact with ID ${req.params.id}` });
});

const addContact = asyncHandler(async (req, res, next) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  return res.status(201).json({ message: "Add contacts" });
});

const updateContact = asyncHandler(async (req, res, next) => {
  return res.status(201).json({ message: "Update contacts" });
});

const deleteContact = asyncHandler(async (req, res, next) => {
  return res.status(201).json({ message: "Delete contacts" });
});

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact,
  getContactById,
};




