require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const itemsRoutes = require("./routes/itemsRoutes");
/* express app*/
const app = express();
const port = process.env.PORT || 4000;

/*middlewares */
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

/* routes */
app.use("/api/items", itemsRoutes);

/*listen app with mongoDB*/
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`mongoDB connectd and app listen on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
