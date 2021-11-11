const mongoose = require('./index');
const Schema = mongoose.Schema;

const DriverSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    city: {type: String, required: true},
    job: {type: String, required: true},
    time: {type: Number, required: true},
    type: {type: String, required: true}
})

module.exports = mongoose.model('Driver', DriverSchema);