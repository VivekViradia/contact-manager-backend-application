const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact-model");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getAllContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  return res.status(200).json({ contacts });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContactById = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    return res.status(404).json({ message: "No Data Found" });
  }
  return res.status(200).json({ contacts });
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const addContact = asyncHandler(async (req, res, next) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404).json({ message: "All fields are mandatory" });
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  return res.status(201).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact Not Found" });
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact Not Found" });
  }
  await contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact,
  getContactById,
};
