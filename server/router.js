const express = require ('express');
const router = express.Router();
const ctrl = require('./Controller/finder.js')

router.post('/', ctrl.postCompanyProfile);
router.post('/', ctrl.postDriverProfile);
router.get('/home', ctrl.getProfile);
router.post('/home/company/post', ctrl.postJob);

module.exports = router;