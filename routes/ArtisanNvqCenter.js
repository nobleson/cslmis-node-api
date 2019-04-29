var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanNvqCenter  = require('../controllers/artisan/ArtisanNvqCenter');

router.get('/getall', artisanNvqCenter.findAll);

// POST request for creating artisan.
router.post('/create', artisanNvqCenter.create);

// PUT request to update artisan.
router.put('/:artisanNvqCenterId', artisanNvqCenter.update);

// DELETE request to delete artisan.
router.delete('/:artisanNvqCenterId', artisanNvqCenter.delete);
// GET request to get one artisan.
router.get('/:artisanNvqCenterId', artisanNvqCenter.findOne);

module.exports = router;