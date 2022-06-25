const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    cuttingno: {
      type: String,
      required: true,
    },
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
    lastWeight : {
        type : String
    }

  },

  { timestamps: true }
);

const Transaction = mongoose.model("Tranasaction", transactionSchema);
module.exports = Transaction;
