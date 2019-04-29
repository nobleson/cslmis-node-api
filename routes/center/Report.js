var express = require('express');
var router = express.Router();

// Require controller modules.
var centerReport  = require('../../controllers/center/Report');

router.get('/getall', centerReport.findAll);

// POST request for creating centerReport.
router.post('/create', centerReport.create);

// PUT request to update centerReport.
router.put('/:centerReportId', centerReport.update);

// DELETE request to delete centerReport.
router.delete('/:centerReportId', centerReport.delete);
// GET request to get one centerReport.
router.get('/:centerReportId', centerReport.findOne);

module.exports = router;