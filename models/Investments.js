const mongoose = require("mongoose");

const { Schema } = mongoose;

const investmentsSchema = new Schema({
  invertor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
  },
  shareNumber: {
    type: Number,
  },
});

const Investments = mongoose.model("Investments", investmentsSchema);

module.exports = Investments;
