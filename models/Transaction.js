const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
  
    partyIdFrom: {
      id: {
        type: String,
        ref: "Party",
        autopopulate: true,
      },
      name: {
        type: String,
      },
    },
    partyTo: {
      id: {
        type: String,
        ref: "Party",
        autopopulate: true,
      },
      name: {
        type: String,
      },
    },
    fromWeight : {
        type : String
    },
    toWeight : {
      type : String
    }, 
    stone_id: {
      type : String,
      required : true
    },

  },

  { timestamps: true }
);

const Transaction = mongoose.model("Tranasaction", transactionSchema);
module.exports = Transaction;
