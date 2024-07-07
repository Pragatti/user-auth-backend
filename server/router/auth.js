// routes/auth.js
const express = require('express');
const router = express.Router();

const { handleSignUpApi, handleLoginApi } = require('../controller/authController');

// Signup route
router.post('/signup', handleSignUpApi);

// Login route
router.post('/login', handleLoginApi);

module.exports = router;
