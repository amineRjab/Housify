const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const mongoUri = "mongodb://127.0.0.1/Housify";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db