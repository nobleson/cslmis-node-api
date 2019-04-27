var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanCenter  = require('../../controllers/artisan/ArtisanCenter');

router.get('/getall', artisanCenter.findAll);

// POST request for creating artisan.
router.post('/create', artisanCenter.create);

// PUT request to update artisan.
router.put('/:artisanCenterId', artisanCenter.update);

// DELETE request to delete artisan.
router.delete('/:artisanCenterId', artisanCenter.delete);
// GET request to get one artisan.
router.get('/:artisanCenterId', artisanCenter.findOne);

module.exports = router;