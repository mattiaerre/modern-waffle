const express = require('express');

const router = express.Router();

const { name, version } = require('../../package.json');

router.get('/', (req, res, next) => {
  const model = { title: `${name} v${version}` };
  res.render('index', model);
});

module.exports = router;
