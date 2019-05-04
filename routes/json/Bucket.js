
var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/json/:file', function(req, res) {
    fs.readFile( __dirname +'/api/' + req.params.file + ".json", 'utf8', function (err, data) {
        res.send(data);
        res.end( data );
    });
});

module.exports = router
