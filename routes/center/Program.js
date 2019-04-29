var express = require('express');
var router = express.Router();

// Require controller modules.
var centerProgram  = require('../../controllers/center/Program');

router.get('/getall', centerProgram.findAll);

// POST request for creating centerProgram.
router.post('/create', centerProgram.create);

// PUT request to update centerProgram.
router.put('/:centerProgramId', centerProgram.update);

// DELETE request to delete centerProgram.
router.delete('/:centerProgramId', centerProgram.delete);
// GET request to get one centerProgram.
router.get('/:centerProgramId', centerProgram.findOne);

module.exports = router;