const getAllContacts = async (req, res, next) => {
  return res.status(200).json({ message: "Get all contacts" });
};

const getContactById = async (req, res, next) => {
  return res.status(200).json({ message: `Get contact with ID ${req.params.id}` });
};

const addContact = async (req, res, next) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  return res.status(201).json({ message: "Add contacts" });
};

const updateContact = async (req, res, next) => {
  return res.status(201).json({ message: "Update contacts" });
};

const deleteContact = async (req, res, next) => {
  return res.status(201).json({ message: "Delete contacts" });
};

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact,
  getContactById,
};
