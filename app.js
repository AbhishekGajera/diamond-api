require("dotenv").config("env");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const port = process.env.PORT;
const cors = require("cors");

const ProductRouter = require("./routes/Product");
const PartyRouter = require("./routes/Party");
const StockRouter = require("./routes/Stock");


// create express app
const app = express();
mongoose
  .connect(process.env.MONGO, {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected with database"))
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())
app.use(ProductRouter);
app.use(PartyRouter);
app.use(StockRouter);





// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});