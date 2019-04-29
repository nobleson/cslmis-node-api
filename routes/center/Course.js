var express = require('express');
var router = express.Router();

// Require controller modules.
var course  = require('../../controllers/center/Course');

router.get('/getall', course.findAll);

// POST request for creating course.
router.post('/create', course.create);

// PUT request to update course.
router.put('/:courseId', course.update);

// DELETE request to delete course.
router.delete('/:courseId', course.delete);
// GET request to get one course.
router.get('/:courseId', course.findOne);

module.exports = router;