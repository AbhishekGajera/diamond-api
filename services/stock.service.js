const httpStatus = require('http-status');
const Stock = require('../models/Stock');
const ApiError = require('../utils/ApiError');
// const { getUserById } = require('./user.service')

/**
 * Create a appoinments
 * @param {Object} leaveBody
 * @returns {Promise<User>}
 */
const addStock = async (leaveBody) => {
  return Stock.create(leaveBody);
};


/**
 * Get appoinments by id
 * @param {ObjectId} id
 * @returns {Promise<Stock>}
 */
 const getStockById = async (id) => {
  return Stock.findById(id);
};

/**
 * Get appoinments by id
 * @param {ObjectId} id
 * @returns {Promise<Stock>}
 */
 const getStockStoneById = async (id) => {
  return Stock.findOne({ stone_id : id});
};


/**
 * Update appoinments by id
 * @param {ObjectId} leaveId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateStockById = async (stone_id, updateBody) => {
  const stocks = await getStockById(stone_id);
  if (!stocks) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Stocks not found');
  }

  Object.assign(stocks, updateBody);
  await stocks.save();
  return stocks;
};



/**
 * Delete appoinments by id
 * @param {ObjectId} appoinmentsId
 * @returns {Promise<Employee>}
 */
 const deleteStockById = async (appoinmentsId) => {
  const stockdata = await getStockById(appoinmentsId);
  if (!stockdata) {
    throw new ApiError(httpStatus.NOT_FOUND, 'stocks not found');
  }
  await stockdata.remove();
  return stockdata;
};


/**
 * Get appoinmentss
 * @returns {Promise<Employee>}
 */
 const getStockList = async (filter,options) => {
 const Stocks = await Stock.paginate(filter, options);
 if (!Stocks) {
   throw new ApiError(httpStatus.NOT_FOUND, 'stocks not found');
 }
 return Stocks;
};

const getUniqueStockByName = async () => {
  const stockList = await Stock.find().distinct("party");
  return stockList
};

module.exports = {
  addStock,
  updateStockById,
  deleteStockById,
  getStockList,
  getStockById,
  getStockStoneById,
  getUniqueStockByName
};
