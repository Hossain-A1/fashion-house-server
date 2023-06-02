require("dotenv").config()
const express = require("express")
 /* express app*/
 const app = express()

 const port = process.env.PORT || 4000

/* express app*/
 app.listen(port,()=>{
  console.log(`app listen on port ${port}`);
 })