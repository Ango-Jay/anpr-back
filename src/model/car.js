const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: { type: String },
  model: { type: String },
  size: { type: String },
  fuelType: { type: String }
});

const CarsModel = mongoose.model("Cars", CarSchema);

module.exports = CarsModel;
