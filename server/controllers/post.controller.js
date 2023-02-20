
const {Post} = require('../database-mongo/Item.model.js');


const selectPost = async function (req, res) {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (error) {
      res.status(404).send(error);
    }
  };
  
const addpost = async function (req, res) {
      try {
        
          const id=req.params.id
        const items = await Post.create({
          Price : req.body.Price,
          type: req.body.type,
          for : req.body.for,
          NbofBedrooms: req.body.nbofBedrooms,
          NbofBeds : req.body.NbofBeds,
          NbofBathrooms : req.body.NbofBathrooms,
          NbofKitchen:req.body.NbofKitchen,
          Area: req.body.Area,
          description: req.body.description,
          Adress: req.body.Adress, 
          images: req.body.images,
          user:id
        });
        res.json(items);
      } catch (error) {
        res.status(404).send(error);
      }
    };

    const Updatepost = async function (req,res) {
      console.log(req.body);
      try {
        const filter = { _id: req.params.id }
        const push = { $push: { images: req.body.images } }
        const updated = await Post.findOneAndUpdate(filter, push);
        res.json(updated);
      } catch (error) {
        res.status(404).send(error);
      }
    };
  
    const updateOnepost = async (req, res) => {
      try {
        const filter = { _id: req.params.id }
        const updated = await Post.findOneAndUpdate(filter, req.body)
        res.json(updated)
      } catch (error) {
        console.log(error);
      }
    };
  
    const deletepost = async (req, res) => {
      try {
        const dell = req.params.id
        const del = await Post.deleteOne({ _id: dell })
        res.json(del)
      } catch (error) {
        console.log(error);
      }
    };

module.exports = { selectPost,addpost,Updatepost,updateOnepost,deletepost };
