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

const postSchema = new mongoose.Schema({
  Price : Number,
  type: String,
  for : String,
  NbofBedrooms: Number,
  NbofBeds : Number,
  NbofBathrooms : Number,
  NbofKitchen:Number,
  Area: Number,
  description: String,
  Adress: String, 
  images: [String],
  user:{type: mongoose.Types.ObjectId, ref: "User"}
})

const Post = mongoose.model("Post", postSchema);

module.exports = {User,Post};
