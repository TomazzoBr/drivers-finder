const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema ({
    name: {type: String, required: true},
    city: {type: String, required: true},
    job: {type: String, required: true},
    time: {type: Number, required: true},
})

const CompanySchema = new Schema ({
    name: {type: String, required: true},
    city: {type: String, required: true},
    goods: {type: String, required: true},
})

const JobSchema = new Schema ({
    size: {type: String, required: true},
    time: {type: String, required: true},
    distance: {type: Number, required: true},
    description: {type: String, required: true},
})

const driver = mongoose.model('driver', DriverSchema, 'drivers');
const company = mongoose.model('company', CompanySchema, 'companies');
const jobs = mongoose.model('jobs', JobSchema, 'jobs');

module.exports = {
    driver: driver,
    company: company,
    jobs: jobs,
};