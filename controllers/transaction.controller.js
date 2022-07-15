const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const {
  addTransaction,
  
} = require("../services/transaction.service");
const pick = require("../utils/pick");

const transactionAdd = catchAsync(async (req, res) => {
  const result = await addTransaction(req.body);
  res.status(httpStatus.CREATED).send(result);
});


module.exports = {
  transactionAdd
};
