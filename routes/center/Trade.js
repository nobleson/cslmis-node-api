var express = require('express');
var router = express.Router();

// Require controller modules.
var centerTrade  = require('../../controllers/center/Trade');

router.get('/getall', centerTrade.findAll);

// POST request for creating centerTrade.
router.post('/create', centerTrade.create);

// PUT request to update centerTrade.
router.put('/:centerTradeId', centerTrade.update);

// DELETE request to delete centerTrade.
router.delete('/:centerTradeId', centerTrade.delete);
// GET request to get one centerTrade.
router.get('/:centerTradeId', centerTrade.findOne);

module.exports = router;