const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const {
  addStock,
  updateStockById,
  deleteStockById,
  getStockList,
  getStockById,
  getStockStoneById,
  getUniqueStockByName,
} = require("../services/stock.service");
const pick = require("../utils/pick");

const stockAdd = catchAsync(async (req, res) => {
  const result = await addStock(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const stockUpdate = catchAsync(async (req, res) => {
  const result = await updateStockById(req.params.id, req.body);
  res.send(result);
});

const stockDelete = catchAsync(async (req, res) => {
  await deleteStockById(req.params.stockId);
  res.status(httpStatus.NO_CONTENT).send("deleted");
});

const getStock = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["stock_type", "current_assign","stone_id","party"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await getStockList(filter, options);
  res.send(result);
});

const getStockByIdController = catchAsync(async (req, res) => {
  try {
    const result = await getStockStoneById(req.params.stockId);
    res.send(result);
  } catch (error) {
  }
});

const getUniqueStock = catchAsync(async (req,res) => {
  const result = await getUniqueStockByName();
  res.send(result);
})

module.exports = {
  stockAdd,
  stockUpdate,
  stockDelete,
  getStock,
  getStockByIdController,
  getUniqueStock
};
