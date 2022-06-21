const httpStatus = require('http-status');
const Party = require('../models/Party');
const ApiError = require('../utils/ApiError');
// const { getUserById } = require('./user.service')

/**
 * Create a appoinments
 * @param {Object} leaveBody
 * @returns {Promise<User>}
 */
const addPartys = async (leaveBody) => {
  return Party.create(leaveBody);
};


/**
 * Get appoinments by id
 * @param {ObjectId} id
 * @returns {Promise<Party>}
 */
 const getPartyById = async (id) => {
  return Party.findById(id);
};


/**
 * Update appoinments by id
 * @param {ObjectId} leaveId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updatePartyById = async (leaveId, updateBody) => {
  const partys = await getPartyById(leaveId);
  if (!partys) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Partys not found');
  }

//   if(updateBody?.user){
//     const user = await getUserById(updateBody?.user)
//     if(!user){
//       throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//     }
//   }

  Object.assign(partys, updateBody);
  await partys.save();
  return partys;
};



/**
 * Delete appoinments by id
 * @param {ObjectId} appoinmentsId
 * @returns {Promise<Employee>}
 */
 const deletePartyById = async (appoinmentsId) => {
  const partydata = await getPartyById(appoinmentsId);
  if (!partydata) {
    throw new ApiError(httpStatus.NOT_FOUND, 'appoinments not found');
  }
  await partydata.remove();
  return partydata;
};


/**
 * Get appoinmentss
 * @returns {Promise<Employee>}
 */
 const getPartyList = async (filter,options) => {
 const partys = await Party.paginate(filter, options);
 console.log("appoi",partys);
 if (!partys) {
   throw new ApiError(httpStatus.NOT_FOUND, 'partys not found');
 }
 return partys;
};



module.exports = {
    addPartys,
    updatePartyById,
  deletePartyById,
  getPartyList
};
