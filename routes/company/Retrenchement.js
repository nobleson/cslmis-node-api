var express = require('express');
var router = express.Router();

// Require controller modules.
var retrenchement  = require('../../controllers/company/Retrenchement');

router.get('/getall', retrenchement.findAll);

// POST request for creating retrenchement.
router.post('/create', retrenchement.create);

// PUT request to update retrenchement.
router.put('/:retrenchementId', retrenchement.update);

// DELETE request to delete retrenchement.
router.delete('/:retrenchementId', retrenchement.delete);
// GET request to get one labourStatistic.
router.get('/:retrenchementId', retrenchement.findOne);

module.exports = router;