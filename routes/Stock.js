const express = require('express');
// const validate = require('../../middlewares/validate');
// const appoinmentsValidation = require('../../validations/appoinments.validation');
const stockController = require('../controllers/stock.controller');
// const auth = require('../../middlewares/auth');


const router = express.Router();


router
.post('/add-stock',stockController.stockAdd)

router
.route('/update-stock')
.patch(stockController.stockUpdate)

router
.route('/fetch-stock')
.get(stockController.getStock)

router
.route('/delete-stock/:stockId')
.get(stockController.stockDelete)

module.exports = router;
