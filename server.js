require("dotenv").config()
const express = require("express")
const itemsRoutes= require("./routes/itemsRoutes")
 /* express app*/
 const app = express()

/*middlewares */
app.use(express.json())
app.use((req,res,next)=>{
console.log(req.path, req.method);
next()
})

/* routes */
app.use("/api/items", itemsRoutes) 



 const port = process.env.PORT || 4000
/* express app*/
 app.listen(port,()=>{
  console.log(`app listen on port ${port}`);
 })