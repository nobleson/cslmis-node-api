var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<!doctype html>\n<html lang="en">\n' +  
  '\n<meta charset="utf-8">\n<title>CSLMIS RESTFul API</title>\n' + 
  '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
  '\n\n<h1>Welcome to CSLMIS Back-End</h1>\n' + 
  '\n\n');
});

module.exports = router
