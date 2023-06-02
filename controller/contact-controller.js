const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact-model");

const getAllContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find();
  return res.status(200).json({ contacts });
});

const getContactById = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    return res.status(404).json({ message: "No Data Found" });
  }
  return res.status(200).json({ contacts });
});

const addContact = asyncHandler(async (req, res, next) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404).json({message:"All fields are mandatory"})
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  return res.status(201).json(contact);
});

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
