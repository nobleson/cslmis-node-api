var express = require('express');
var router = express.Router();

// Require controller modules.
var jobAdvent  = require('../../controllers/company/JobAdvent');

router.get('/getall', jobAdvent.findAll);

// POST request for creating artisan.
router.post('/create', jobAdvent.create);

// PUT request to update artisan.
router.put('/:jobAdventId', jobAdvent.update);

// DELETE request to delete artisan.
router.delete('/:jobAdventId', jobAdvent.delete);
// GET request to get one artisan.
router.get('/:jobAdventId', jobAdvent.findOne);

module.exports = router;