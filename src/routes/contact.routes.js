const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContactByID,
  updateContactByID,
  deleteContactByID,
} = require("../controllers/contact.controllers.js");

const validateToken = require("../middleware/validateTokenHandler.middleware.js");

router.use(validateToken);

// GET all contacts, update by ID
router.route("/").get(getContacts).post(createContact);

// GET contact by ID, update by ID and delete by ID
router
  .route("/:id")
  .get(getContactByID)
  .put(updateContactByID)
  .delete(deleteContactByID);

module.exports = router;
