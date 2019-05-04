var express = require('express');
var router = express.Router();

// Require controller modules.
var labourStatistic  = require('../../controllers/company/LabourStatistic');

router.get('/getall', labourStatistic.findAll);

// POST request for creating labourStatistic.
router.post('/create', labourStatistic.create);

// PUT request to update labourStatistic.
router.put('/:labourStatisticId', labourStatistic.update);

// DELETE request to delete labourStatistic.
router.delete('/:labourStatisticId', labourStatistic.delete);
// GET request to get one labourStatistic.
router.get('/:labourStatisticId', labourStatistic.findOne);

module.exports = router;