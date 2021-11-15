const express = require("express");
const router = express.Router();
const ctrl = require("./Controller/finder.js");

router.get("/company/:id", ctrl.getCompanyProfile);
router.post("/company", ctrl.postCompanyProfile);
router.get("/driver/:id", ctrl.getDriverProfile);
router.post("/driver", ctrl.postDriverProfile);
router.post("/company/:id/jobs", ctrl.postJob);

module.exports = router;
