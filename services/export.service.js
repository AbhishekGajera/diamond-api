const httpStatus = require('http-status');
const Export = require('../models/Export');
const ApiError = require('../utils/ApiError');
// const { getUserById } = require('./user.service')

/**
 * Create a appoinments
 * @param {Object} leaveBody
 * @returns {Promise<User>}
 */
const addExport = async (leaveBody) => {
  return Export.create(leaveBody);
};


/**
 * Get appoinments by id
 * @param {ObjectId} id
 * @returns {Promise<Export>}
 */
 const getExportById = async (id) => {
  return Export.findById(id);
};

/**
 * Get appoinments by id
 * @param {ObjectId} id
 * @returns {Promise<Export>}
 */
 const getExportStoneById = async (id) => {
  return Export.findOne({ stone_id : id});
};


/**
 * Update appoinments by id
 * @param {ObjectId} leaveId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateExportById = async (stone_id, updateBody) => {
  const exports = await getExportStoneById(stone_id);
  if (!exports) {
    throw new ApiError(httpStatus.NOT_FOUND, 'exports not found');
  }

  Object.assign(exports, updateBody);
  await exports.save();
  return exports;
};



/**
 * Delete appoinments by id
 * @param {ObjectId} appoinmentsId
 * @returns {Promise<Export>}
 */
 const deleteExportById = async (appoinmentsId) => {
  const exportdata = await getExportById(appoinmentsId);
  if (!exportdata) {
    throw new ApiError(httpStatus.NOT_FOUND, 'exports not found');
  }
  await exportdata.remove();
  return exportdata;
};


/**
 * Get appoinmentss
 * @returns {Promise<Employee>}
 */
 const getExportList = async (filter,options) => {
 const Exports = await Export.paginate(filter, options);
 if (!Exports) {
   throw new ApiError(httpStatus.NOT_FOUND, 'Exports not found');
 }
 return Exports;
};

const getUniqueExportByName = async () => {
  const exportList = await Export.find().distinct("party");
  return exportList
};

module.exports = {
  addExport,
  updateExportById,
  deleteExportById,
  getExportList,
  getExportById,
  getExportStoneById,
  getUniqueExportByName
};
