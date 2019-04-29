var express = require('express');
var router = express.Router();

// Require controller modules.
var centerFacility  = require('../../controllers/center/Facility');

router.get('/getall', centerFacility.findAll);

// POST request for creating centerFacility.
router.post('/create', centerFacility.create);

// PUT request to update centerFacility.
router.put('/:centerFacilityId', centerFacility.update);

// DELETE request to delete centerFacility.
router.delete('/:centerFacilityId', centerFacility.delete);
// GET request to get one centerFacility.
router.get('/:centerFacilityId', centerFacility.findOne);

module.exports = router;