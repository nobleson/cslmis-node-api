var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanEducation  = require('../../controllers/artisan/ArtisanEducation');

router.get('/getall', artisanEducation.findAll);

// POST request for creating artisan.
router.post('/create', artisanEducation.create);

// PUT request to update artisan.
router.put('/:artisanEducationId', artisanEducation.update);

// DELETE request to delete artisan.
router.delete('/:artisanEducationId', artisanEducation.delete);
// GET request to get one artisan.
router.get('/:artisanEducationId', artisanEducation.findOne);

module.exports = router;