const mongoose = require('./index');
const Schema = mongoose.Schema;

const CompanySchema = new Schema ({
    name: {type: String, required: true, unique: true},
    city: {type: String, required: true},
    goods: {type: String, required: true},
    type: {type: String, required: true},
})

module.exports = mongoose.model('Company', CompanySchema);