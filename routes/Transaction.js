const express = require('express');
// const validate = require('../../middlewares/validate');
// const appoinmentsValidation = require('../../validations/appoinments.validation');
const transactionController = require('../controllers/transaction.controller');
// const auth = require('../../middlewares/auth');


const router = express.Router();


// router
// .post('/add-transaction',transactionController.transactionAdd)
router
.route('/add-transaction')
.post(transactionController.transactionAdd)

module.exports = router;
