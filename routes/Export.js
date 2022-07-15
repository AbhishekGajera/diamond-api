const express = require('express');
// const validate = require('../../middlewares/validate');
// const appoinmentsValidation = require('../../validations/appoinments.validation');
const exportController = require('../controllers/export.controller');
// const auth = require('../../middlewares/auth');


const router = express.Router();


router
.post('/export-stock',exportController.exportAdd)

router
.route('/update-export')
.patch(exportController.exportUpdate)

router
.route('/fetch-export')
.get(exportController.getExport)

router
.route('/exportById/:stockId')
.get(exportController.getExportByIdController)

router
.route('/fetch-unique-stocks')
.get(exportController.getUniqueExport)

router
.route('/delete-export/:exportId')
.get(exportController.exportDelete)

module.exports = router;
    