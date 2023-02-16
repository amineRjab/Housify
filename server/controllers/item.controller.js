// DELETE THIS LINE
// const selectAll = () => {};
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
const User = require("../database-mongo/Item.model.js");

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
const selectAll = function (req, res) {

  User.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const saveUser = (req, res) => {
  const imageProfile = req.body.profileImg;
  cloudinary.uploader
    .upload(imageProfile, { folder: "userProfile" })
    .then((response) => {
      console.log(response.url);
      const password = req.body.password;
      const saltRounds = 10;
      bcrypt
        .genSalt(saltRounds)
        .then((salt) => {
          console.log("Salt: ", salt);
          return bcrypt.hash(password, salt);
          //unique random string umpredictabble
        })
        .then((hash) => {
          console.log("Hash: ", hash);
          User.create({
            FirstName: req.body.name,
            LastName: req.body.lastname,
            Age: req.body.age,
            email: req.body.email,
            password: hash,
            img: response.url,
            contact: req.body.contact,
          });
        })
        .catch((err) => console.error(err.message));
    })
    .catch((err) => console.log(err));
};

const verifyUser = (req, res) => {
  // console.log(req.body);

  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email }).then((response) => {
    console.log(response)
    if(response===null){
      res.json("please verify your e-mail")
    }
    else{ bcrypt.compare(password, response.password, function (err, result) {
      // console.log(result);
      if (result) {
        const user = { email: email };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        console.log("==>accessToken",accessToken);
        res.json({ accessToken: accessToken });
      } else {
        res.json("Please verify your password");
      }
    });
  }
}).catch((err)=>
      console.log(err));}
    // if(!response) {res.json("Please verify email")}
    // console.log(response)
    
      
   


// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// const selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { selectAll, saveUser, verifyUser };
