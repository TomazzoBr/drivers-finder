const mongoose = require("./index");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  goods: { type: String, required: true },
});

module.exports = mongoose.model("company", CompanySchema);
