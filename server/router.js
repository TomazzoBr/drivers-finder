const express = require ('express');
const router = express.Router();
const ctrl = require('./Controller/finder.js')

router.post('/register/company', ctrl.postCompanyProfile);
router.post('/register/driver', ctrl.postDriverProfile);
router.get('/home', ctrl.getProfile);
router.post('/home/company/jobs', ctrl.postJob);

module.exports = router;