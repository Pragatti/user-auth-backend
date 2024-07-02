const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auth-app");
    console.log("Database is connected...");
  } catch (error) {
    console.log("Database connection failed!!", error);
  }
};

module.exports = { connectDatabase };