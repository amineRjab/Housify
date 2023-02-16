const {User} = require('../database-mongo/Item.model.js');


const selectUser = async function (req, res) {
    try {
      const posts = await User.find({});
      res.json(posts);
    } catch (error) {
      res.status(404).send(error);
    }
  };
  
const addUser = async function (req,res) {
    console.log(req.body);
    try {
      const users = await User.create(req.body);
      res.json(users);
    } catch (error) {
      res.status(404).send(error);
    }
  };

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

module.exports = { selectUser,addUser,UpdateUimg,updateOne,deleteOne };