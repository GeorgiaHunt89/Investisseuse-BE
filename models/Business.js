const mongoose = require("mongoose");
const { Schema } = mongoose;

const BusinessSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    url: String,
  },
  logo: {
    type: String,
  },
  sharePrice: {
    type: Number,
    required: true,
    min: 0.99,
  },
  shareQuantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  pitchDeck: {
    type: String,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;
