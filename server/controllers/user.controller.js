
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer=require("nodemailer")
const fs = require('fs');
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const {User} = require("../database-mongo/Item.model.js");
const transporter = nodemailer.createTransport({
 service:"gmail",
  auth: {
    user: "Aminerjab93@gmail.com",
    pass: "pnpzkhpqsumpujsz",
  },
});

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

          
          }).then((User) => {
            const mailOptions = {
              from:"Aminerjab93@gmail.com" ,
              to: User.email,
              subject: "Welcome to housify",
              text: `Dear ${User.FirstName},
Thank you for registering with Housify! We are thrilled to have you as a member of our online community.

Thank you again for joining us . We look forward to seeing you online!
Best regards,

 AmineRjab
Housify Team

// `,
//     attachments: [{
//         filename: 'housify.png',
//         path: 'C:/Users/ilhem/Desktop/Housify/client/dist/assets/housify.png',
//         cid: 'unique@kreata.ee' 
//     }],
//      html: '<img src="cid:unique@kreata.ee"/>'


            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
            res.status(201).send(User);
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
    

    const UpdateUimg = async function (req,res) {
      console.log(req.body);
      try {
        const filter = { _id: req.params.id }
        const push = { $push: { img: req.body.img } }
        const updated = await User.findOneAndUpdate(filter, push);
        res.json(updated);
      } catch (error) {
        res.status(404).send(error);
      }
    };
  
    const updateOne = async (req, res) => {
      try {
        const filter = {_id:req.params.id }
        const updated = await User.findOneAndUpdate(filter,req.body)
        res.json(updated)
      } catch (error) {
        console.log(error);
      }
    };
  
    const deleteOne = async (req, res) => {
      try {
        const dell = req.params.id
        const del = await User.deleteOne({ _id: dell })
        res.json(del)
      } catch (error) {
        console.log(error);
      }
    };
  

module.exports = { selectAll, saveUser, verifyUser ,deleteOne, updateOne, UpdateUimg};
