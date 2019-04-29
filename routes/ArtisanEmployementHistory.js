var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanEmployementHistory  = require('../controllers/artisan/ArtisanEmployementHistory');

router.get('/getall', artisanEmployementHistory.findAll);

// POST request for creating artisan.
router.post('/create', artisanEmployementHistory.create);

// PUT request to update artisan.
router.put('/:artisanEmployementHistoryId', artisanEmployementHistory.update);

// DELETE request to delete artisan.
router.delete('/:artisanEmployementHistoryId', artisanEmployementHistory.delete);
// GET request to get one artisan.
router.get('/:artisanEmployementHistoryId', artisanEmployementHistory.findOne);

module.exports = router;