var express = require('express');
var router = express.Router();

// Require controller modules.
var centerAffiliate = require('../../controllers/center/Affiliate');

router.get('/getall', centerAffiliate.findAll);

// POST request for creating centerAffiliate.
router.post('/create', centerAffiliate.create);

// PUT request to update centerAffiliate.
router.put('/:centerAffiliateId', centerAffiliate.update);

// DELETE request to delete centerAffiliate.
router.delete('/:centerAffiliateId', centerAffiliate.delete);
// GET request to get one centerAffiliate.
router.get('/:centerAffiliateId', centerAffiliate.findOne);

module.exports = router;