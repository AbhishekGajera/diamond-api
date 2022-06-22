const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON,paginate } = require('./plugins');

//target

const stockSchema = new mongoose.Schema({

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
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  stone_id: {
    type : String,
    required : true
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
stockSchema.plugin(toJSON);
stockSchema.plugin(paginate);
stockSchema.plugin(require('mongoose-autopopulate'));



const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
