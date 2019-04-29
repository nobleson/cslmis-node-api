var express = require('express');
var router = express.Router();

// Require controller modules.
var article  = require('../../controllers/article/Article');

router.get('/getall', article.findAll);

// POST request for creating artisan.
router.post('/create', article.create);

// PUT request to update artisan.
router.put('/:articleId', article.update);

// DELETE request to delete artisan.
router.delete('/:articleId', article.delete);
// GET request to get one artisan.
router.get('/:articleId', article.findOne);

module.exports = router;