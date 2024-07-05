// routes/auth.js
const express = require('express');
const router = express.Router();

const { handleSignUpApi } = require('../controller/authController');

// Signup route
router.post('/signup', handleSignUpApi)

module.exports = router;
