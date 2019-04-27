var express = require('express');
var router = express.Router();

// Require controller modules.
var centerBoard  = require('../../controllers/center/Board');

router.get('/getall', centerBoard.findAll);

// POST request for creating centerBoard.
router.post('/create', centerBoard.create);

// PUT request to update centerBoard.
router.put('/:centerBoardId', centerBoard.update);

// DELETE request to delete centerBoard.
router.delete('/:centerBoardId', centerBoard.delete);
// GET request to get one centerBoard.
router.get('/:centerBoardId', centerBoard.findOne);

module.exports = router;