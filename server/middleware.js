const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  // console.log("headers======>",req.headers["authorization"])
  const authHeader = req.headers["authorization"];
  console.log("autheader", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("middleware===>", token);
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  next();
};

module.exports = authenticateToken;
