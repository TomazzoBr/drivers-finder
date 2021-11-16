const express = require("express");
const router = express.Router();
const ctrl = require("./Controller/finder.js");

router.get("/company/:id", ctrl.getCompanyProfile); // get one company profile
router.post("/company", ctrl.saveCompanyProfile); // save a profile in the db
router.get("/driver/:id", ctrl.getDriverProfile); // get one driver profile
router.post("/driver", ctrl.saveDriverProfile); // save a profile in the db
router.post("/company/:id/jobs", ctrl.saveNewJob); // save a new job in the db

// router.get('/drivers', ctrl.pullDriversList)

module.exports = router;
