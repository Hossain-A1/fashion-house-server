const express = require("express")

 /*Router */
 const router = express.Router()

 /* get all itens */
 router.get("/",(req,res)=>{
  res.json({message:'this is get requiest'})
  })

 /* get a iten */

  
  router.get("/:id",(req,res)=>{
  res.json({message:'this is single requiest'})
  })

 /* post a iten */
  router.post("/",(req,res)=>{
    res.json({message:'this is a post req'})
  })

 /* get a  deleted iten */

router.delete("/:id",(req,res)=>{
  res.json({message:'deleted a item'})
})

 /* patch a iten */
router.patch("/:id",(req,res)=>{
  res.json({message:"update a item"})
})


 module.exports = router


