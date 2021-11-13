const DriverDb = require('../Models/driver-schema');
const CompanyDb = require('../Models/company-schema');
const JobsDb = require('../Models/company-jobs-schema');

// Function to post new company/producer profile
exports.postCompanyProfile = async (req, res) => {
    try {
        const obj = await CompanyDb.create({
            name: req.body.name,
            city: req.body.city,
            goods: req.body.goods,
            type: req.body.type
        });
        res.send(obj);
        res.status(201);
    } catch (error) {
        res.send(error);
        res.status(400);
    }
}

// Function to post driver profile
exports.postDriverProfile = async (req, res) => {
    try {
        const obj = await DriverDb.create({
            name: req.body.name,
            city: req.body.city,
            job: req.body.job,
            time: req.body.time,
            type: req.body.type
        });
        res.send(obj);
        res.status(201);
    } catch (error) {
        res.send(err);
        res.status(400);
    }
}

// Function to get profile desired
exports.getProfile = async (req, res) => {
    try {
        const name = req.body.name;
        const profile = req.body.type === 'driver' ?
            await DriverDb.findOne({ name }) :
            await CompanyDb.findOne({ name });
        res.status(200);
        res.send(profile);

    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

// Function to post new jobs
exports.postJob = async (req, res) => {
    try {
        // const companyId = req.body.companyId;
        // const company = await CompanyDb.findOne({ companyId });

        const obj = await JobsDb.create({
            companyId: req.body.companyId,
            size: req.body.size,
            time: req.body.time,
            distance: req.body.distance,
            description: req.body.description
        });
        res.send(obj);
        res.status(201);
    } catch (error) {
        res.send(err);
        res.status(400);
    }
}