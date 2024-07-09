const User = require("../models/usermodel");

// Function to validate email format
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const handleSignUpApi = async (req, res) => {
const { firstname, lastname, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
   if(!firstname){
    return res.status(400).json({ msg: 'User already exists' });
   }
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user
    user = new User({
      firstname,
      lastname,
      email,
      password
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
const handleLoginApi = async (req, res) => {
 
  const { email, password } = req.body;



  try {
    // Check if the user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // If credentials are correct, return a success response
    res.status(200).json({ msg: 'Login successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { handleSignUpApi, handleLoginApi};
