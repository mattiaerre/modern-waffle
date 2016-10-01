const express = require('express');
const request = require('request');

const router = express.Router();

const name = require('../../package.json').name;
const version = require('../../package.json').version;

router.get('/', (req, res, next) => {
  const model = { title: `${name} v${version}` };
  res.render('index', model);
});

module.exports = router;
