require("dotenv").config("../env");
const router = require("express").Router();
const Product = require("../models/Product");



router.post("/addproduct", async (req, res) => {
  try {

 
     let product = new Product({
        ...req.body,
      
      });
      await product.save();
    

      res.status(200).json({ product });
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getproduct",  async (req, res) => {
  try {
  
    const data = await Product.find({ });
    res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;