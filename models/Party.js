const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON,paginate } = require('./plugins');

//target

const partySchema = new mongoose.Schema({


  name: {
    type: String,
    required: true,
  },
  mobileno: {
    type : Number,
    required : true
  },
  description : {
    type : String,
    required : false,
  },
  type : {
    type: Number,
    required: true,
    enum: [0,1]
  }
},
{
  timestamps : true
});

// add plugin that converts mongoose to json
partySchema.plugin(toJSON);
partySchema.plugin(paginate);
partySchema.plugin(require('mongoose-autopopulate'));



const Party = mongoose.model('Party', partySchema);

module.exports = Party;
