const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

// Handle Register User
const handleSignUpApi = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  // Create a new user
  const userData = new User({
    first_name,
    last_name,
    email,
    password,
  });

  try {
    // Check if the user already exists
    let userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ msg: "User already exists with this email address" });
    } else {
      // if not exists then create user
      await userData.save();
      return res.status(201).json({ msg: "User registered successfully" });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};

// Handle Login User
const handleLoginApi = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // If credentials are correct, return a success response
    res.status(200).json({ msg: "Login successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { handleSignUpApi, handleLoginApi };
