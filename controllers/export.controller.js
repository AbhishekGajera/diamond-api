const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const {
    addExport,
    updateExportById,
    deleteExportById,
    getExportList,
    getExportById,
    getExportStoneById,
    getUniqueExportByName
} = require("../services/export.service");
const pick = require("../utils/pick");

const exportAdd = catchAsync(async (req, res) => {
  const result = await addExport(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const exportUpdate = catchAsync(async (req, res) => {
  const result = await updateExportById(req.body.stone_id, req.body);
  res.send(result);
});

const exportDelete = catchAsync(async (req, res) => {
  await deleteExportById(req.params.stockId);
  res.status(httpStatus.NO_CONTENT).send("deleted");
});

const getExport = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["stock_type", "current_assign","stone_id","party"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await getExportList(filter, options);
  res.send(result);
});

const getExportByIdController = catchAsync(async (req, res) => {
  try {
    const result = await getExportStoneById(req.params.stockId);
    res.send(result);
  } catch (error) {
  }
});

const getUniqueExport = catchAsync(async (req,res) => {
  const result = await getUniqueExportByName();
  res.send(result);
})

module.exports = {
  exportAdd,
  exportUpdate,
  exportDelete,
  getExport,
  getExportByIdController,
  getUniqueExport
};
