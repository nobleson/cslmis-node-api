var express = require('express');
var router = express.Router();

// Require controller modules.
var centerStrength  = require('../../controllers/center/Strength');

router.get('/getall', centerStrength.findAll);

// POST request for creating centerStrength.
router.post('/create', centerStrength.create);

// PUT request to update centerStrength.
router.put('/:centerStrengthId', centerStrength.update);

// DELETE request to delete centerStrength.
router.delete('/:centerStrengthId', centerStrength.delete);
// GET request to get one centerStrength.
router.get('/:centerStrengthId', centerStrength.findOne);

module.exports = router;