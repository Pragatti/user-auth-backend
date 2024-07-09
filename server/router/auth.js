// routes/auth.js
const express = require('express');
const router = express.Router();

const { handleSignUpApi, handleLoginApi } = require('../controller/authController');
const { validate ,signupSchema, loginSchema } = require('../middleware/validateMiddleware');

// Signup route
router.post('/signup',  validate(signupSchema), handleSignUpApi);

// Login route
router.post('/login', validate(loginSchema), handleLoginApi);

module.exports = router;
