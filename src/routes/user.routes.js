const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/user.controllers");
const validateToken = require("../middleware/validateTokenHandler.middleware");

// Middleware example (if you need authentication for /current route)
// const { authenticate } = require("../middleware/auth");

// Register a new user
router.post("/register", registerUser);

// Login a user
router.post("/login", loginUser);

// Get the current user (consider adding authentication middleware)
// router.get("/current", authenticate, currentUser);
// end point, middleware, route
router.get("/current", validateToken, currentUser);

module.exports = router;
