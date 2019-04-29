var express = require('express');
var router = express.Router();

// Require controller modules.
var artisanCertificate  = require('../controllers/artisan/ArtisanCertificate');

router.get('/getall', artisanCertificate.findAll);

// POST request for creating artisan.
router.post('/create', artisanCertificate.create);

// PUT request to update artisan.
router.put('/:artisanCertificateId', artisanCertificate.update);

// DELETE request to delete artisan.
router.delete('/:artisanCertificateId', artisanCertificate.delete);
// GET request to get one artisan.
router.get('/:artisanCertificateId', artisanCertificate.findOne);

module.exports = router;