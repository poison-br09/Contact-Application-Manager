const asyncHandler = require("express-async-handler");
const Contact = require("../model/contact.model.js");
// It will get all the contacts at the API /api/contacts
const getContacts = asyncHandler(async (req, res) => {
  const Contact = await Contact.find({ user_id: req.user.id });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// It will create teh new contact at the API /api/contacts
//@route POST api/contacts

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});

const getContactByID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const updateContactByID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // check if it's the correct contact

  if (contact.user_id.toString() !== contact.req.user.id) {
    res.status(403);
    throw new Error("User don't have the permission to update other contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

const deleteContactByID = asyncHandler(async (req, res) => {
  // for deleting the contact first we need to find the contact
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }

  if (contact.user_id.toString() !== contact.req.user.id) {
    res.status(403);
    throw new Error(
      "User doesn't have the permission to delete other contacts"
    );
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContactByID,
  updateContactByID,
  deleteContactByID,
};
