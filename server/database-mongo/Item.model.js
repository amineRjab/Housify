const mongoose = require("mongoose");
const db = require("./index.js");

const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Age: Number,
  email: { type: String, unique: true },
  password: String,
  img: [String],
  contact: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
