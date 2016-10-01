const express = require('express');

const router = express.Router();

const { name, version } = require('../../package.json');

router.get('/', (req, res, next) => {
  const model = { title: `${name} v${version}`, host: req.headers.host };
  res.render('index', model);
});

module.exports = router;
