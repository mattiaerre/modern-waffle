const express = require('express');

const router = express.Router();

const name = require('../../package.json').name;
const version = require('../../package.json').version;

router.get('/', (req, res, next) => {
  res.render('index', { title: `${name} v${version}` });
});

module.exports = router;
