const mongoose = require("../config/index");

const Schema = mongoose.Schema;

const phonesSchema = new Schema({
  name: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  description: {
    type: String,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageFileName: {
    type: String,
  },
  screen: {
    type: String,
  },
  processor: {
    type: String,
  },
  ram: {
    type: Number,
  },
});

const Phones = mongoose.model("Phones", phonesSchema);

module.exports = Phones;
