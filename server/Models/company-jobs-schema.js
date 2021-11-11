const mongoose = require('./index');
const Schema = mongoose.Schema;

const JobsSchema = new Schema ({
    companyId: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    size: {type: String, required: true},
    time: {type: String, required: true},
    distance: {type: String, required: true},
    description: {type: String, required: true},
})

module.exports = mongoose.model('Jobs', JobsSchema);