var express = require('express');
var router = express.Router();

const name = require('../package.json').name

router.get('/', function (req, res, next) {
  res.render('index', { title: name });
});

module.exports = router;
