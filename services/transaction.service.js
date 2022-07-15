const httpStatus = require('http-status');
const Transaction = require('../models/Transaction');
const ApiError = require('../utils/ApiError');
// const { getUserById } = require('./user.service')

/**
 * Create a appoinments
 * @param {Object} leaveBody
 * @returns {Promise<User>}
 */
const addTransaction = async (leaveBody) => {
  return Transaction.create(leaveBody);
};




module.exports = {
  addTransaction
};
