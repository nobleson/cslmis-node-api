var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanApprentiship  = require('../controllers/artisan/ArtisanApprentiship');

router.get('/getall', artisanApprentiship.findAll);

// POST request for creating artisan.
router.post('/create', artisanApprentiship.create);

// PUT request to update artisan.
router.put('/:artisanApprentishipId', artisanApprentiship.update);

// DELETE request to delete artisan.
router.delete('/:artisanApprentishipId', artisanApprentiship.delete);
// GET request to get one artisan.
router.get('/:artisanApprentishipId', artisanApprentiship.findOne);

module.exports = router;