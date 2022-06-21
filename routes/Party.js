const express = require('express');
// const validate = require('../../middlewares/validate');
// const appoinmentsValidation = require('../../validations/appoinments.validation');
const partyController = require('../controllers/party.controller');


const router = express.Router();


router
.post('/add-party',partyController.partyAdd)

router
.route('/update-party')
.patch(partyController.partyUpdate)

router
.route('/fetch-party')
.get(partyController.getParty)

router
.route('/delete-party/:partyId')
.get(partyController.partyDelete)

module.exports = router;
