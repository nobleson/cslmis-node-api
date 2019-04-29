var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanLicense  = require('../../controllers/artisan/ArtisanLicense');

router.get('/getall', artisanLicense.findAll);

// POST request for creating artisan.
router.post('/create', artisanLicense.create);

// PUT request to update artisan.
router.put('/:artisanLicenseId', artisanLicense.update);

// DELETE request to delete artisan.
router.delete('/:artisanLicenseId', artisanLicense.delete);
// GET request to get one artisan.
router.get('/:artisanLicenseId', artisanLicense.findOne);

module.exports = router;