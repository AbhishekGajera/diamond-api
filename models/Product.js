const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    cuttingno: {
      type: String,
      required: true
    
    },
    totalweight: {
      type: String,
      required: true
     
    },
    stoneweight: {
        type: String,
        required: true
      
    },
   currentweight: {
        type: String,
        required: true
      
    },
    stoneid: {
        type: String,
        required: true
       
    },
    barcodenumber: {
        type: String,
        required: true
      
    },
    
  },

  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;