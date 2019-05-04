var express = require('express');
var router = express.Router();

// Require controller modules.
var jobApplication  = require('../../controllers/company/JobApplication');

router.get('/getall', jobApplication.findAll);

// POST request for creating artisan.
router.post('/create', jobApplication.create);

// PUT request to update artisan.
router.put('/:jobApplicationId', jobApplication.update);

// DELETE request to delete artisan.
router.delete('/:jobApplicationId', jobApplication.delete);
// GET request to get one artisan.
router.get('/:jobApplicationId', jobApplication.findOne);

module.exports = router;