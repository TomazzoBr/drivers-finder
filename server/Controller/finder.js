const DriverDb = require("../Models/driver-schema");
const CompanyDb = require("../Models/company-schema");
const JobsDb = require("../Models/company-jobs-schema");

// Function to post new company/producer profile
exports.saveCompanyProfile = async (req, res) => {
  try {
    const obj = await CompanyDb.create({
      name: req.body.name,
      city: req.body.city,
      goods: req.body.goods,
    });
    res.send(obj);
    res.status(201);
  } catch (error) {
    res.send(error);
    res.status(400);
  }
};

// Function to post driver profile
exports.saveDriverProfile = async (req, res) => {
  try {
    const obj = await DriverDb.create({
      name: req.body.name,
      city: req.body.city,
      job: req.body.job,
      time: req.body.time,
    });
    res.send(obj);
    res.status(201);
  } catch (error) {
    res.send(err);
    res.status(400);
  }
};

// Function to get company's profile desired
exports.getCompanyProfile = async (req, res) => {
  try {
    const name = req.body.name;
    const profile = await DriverDb.findOne({ name });
    res.status(200);
    res.send(profile);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// Function to get driver's profile desired

exports.getDriverProfile = async (req, res) => {
  try {
    const name = req.body.name;
    const profile = await CompanyDb.findOne({ name });
    res.status(200);
    res.send(profile);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// Function to post new jobs
exports.saveNewJob = async (req, res) => {
  try {
    // const companyId = req.body.companyId;
    // const company = await CompanyDb.findOne({ companyId });

    const obj = await JobsDb.create({
      companyId: req.body.companyId,
      size: req.body.size,
      time: req.body.time,
      distance: req.body.distance,
      description: req.body.description,
    });
    res.send(obj);
    res.status(201);
  } catch (error) {
    res.send(err);
    res.status(400);
  }
};
