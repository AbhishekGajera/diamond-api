const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON,paginate } = require('./plugins');

//target

const exportSchema = new mongoose.Schema({

  stock_type : {
    type: Number,
    required: true,
    enum: [0,1] // 0 is for outside and 1 is for inside
  },
  current_assign: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Party',
    autopopulate: true,
  },
  lot_no: {
    type: String,
    required: false,
    default : '',
  },
  party_code: {
    type: String,
    required: false,
    default : '',
  },
  weight: {
    type: String,
    required: true,
  },
  stone_id: {
    type : String,
    required : true,
    unique : true
  },
  defaultDate: {
    type: String,
    // required : true
  },
  party: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Party',
    autopopulate: true,
  },
  status : {
    type: Number,
    required: true,
    enum: [0,1] // 0 is for credit, 1 is for debit
  }
},
{
  timestamps : true
});

// add plugin that converts mongoose to json
exportSchema.plugin(toJSON);
exportSchema.plugin(paginate);
exportSchema.plugin(require('mongoose-autopopulate'));



const Export = mongoose.model('Export', exportSchema);

module.exports = Export;
