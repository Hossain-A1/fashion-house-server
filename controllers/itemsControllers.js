const mongoose = require("mongoose");
const Project = require("../models/myProjectModel");

// GET ALL ITEMS
const getItems = async (req, res) => {
  const items = await Project.find({});
  res.status(200).json(items);
};

// GET SINGLE ITEM
const getSingleItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const item = await Project.findById(id);

  if (!item) {
    return res.status(404).json({ error: "No item found" });
  }
  res.status(200).json(item);
};

// GET A POST ITEM
const postItems =
  ("/",
  async (req, res) => {
    const data = req.body;

    try {
      const postItems = await Project.create({
        ...data,
      });
      res.status(200).json(postItems);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// GET A DELETE ITEM

const deleteItem = async(req,res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
  return  res.status(400).json({error:"Invalid id"})
  }

  const item = await Project.findOneAndDelete({_id: id})

  if(!item){
    return res.status(400).json({error:"No item found"})
  }
  res.status(200).json(item)

}

// GET A UPDATE ITEM
const updateItem = async(req,res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
  return  res.status(400).json({error:"Invalid id"})
  }

  const item = await Project.findOneAndUpdate({_id: id},{...req.body})

  if(!item){
    return res.status(400).json({error:"No item found"})
  }
  res.status(200).json(item)

}


module.exports = {
  getItems,
  postItems,
  getSingleItem,
  deleteItem,
  updateItem
};
// HET A SINGLE PROJECT
