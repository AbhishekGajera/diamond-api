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
 * Update appoinments by id
 * @param {ObjectId} leaveId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateStockById = async (leaveId, updateBody) => {
  const stocks = await getStockById(leaveId);
  if (!stocks) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Stocks not found');
  }

//   if(updateBody?.user){
//     const user = await getUserById(updateBody?.user)
//     if(!user){
//       throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//     }
//   }

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



module.exports = {
    addStock,
    updateStockById,
  deleteStockById,
  getStockList
};
