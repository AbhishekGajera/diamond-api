const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {   addPartys,
    updatePartyById,
  deletePartyById,
  getPartyList } = require('../services/party.service');
const pick = require('../utils/pick');


const partyAdd = catchAsync(async (req, res) => {
  const result = await addPartys(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const partyUpdate = catchAsync(async (req, res) => {
  const result = await updatePartyById(req.body.partyId,req.body);
  res.send(result);
});

const partyDelete = catchAsync(async (req, res) => {
  await deletePartyById(req.params.partyId);
  res.status(httpStatus.NO_CONTENT).send("deleted");
});

const getParty = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await getPartyList(filter, options);
  res.send(result);
});

module.exports = {
  partyAdd,
  partyUpdate,
  partyDelete,
  getParty
};
