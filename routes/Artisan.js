var express = require('express');
var router = express.Router();

// Require controller modules.
var artisan  = require('../controllers/Artisan');

router.get('/getall', artisan.findAll);

// POST request for creating artisan.
router.post('/create', artisan.create);

// PUT request to update artisan.
router.put('/:artisanId', artisan.update);

// DELETE request to delete artisan.
router.delete('/:artisanId', artisan.delete);
// GET request to get one artisan.
router.get('/:artisanId', artisan.findOne);

module.exports = router;