var express = require('express');
var router = express.Router();

// Require controller modules.
var company  = require('../../controllers/company/Company');

router.get('/getall', company.findAll);

// POST request for creating artisan.
router.post('/create', company.create);

// PUT request to update artisan.
router.put('/:companyId', company.update);

// DELETE request to delete artisan.
router.delete('/:companyId', company.delete);
// GET request to get one artisan.
router.get('/:companyId', company.findOne);

module.exports = router;