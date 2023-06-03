const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    images:{
      type:String
    },
    headline: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
