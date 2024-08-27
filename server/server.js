const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./router/auth");
const { establishDatabaseConnection } = require("./config/database");
const cors = require('cors');
// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.options('*', cors());
app.use(bodyParser.json());
app.use(router);
establishDatabaseConnection(); // Connect with database

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
