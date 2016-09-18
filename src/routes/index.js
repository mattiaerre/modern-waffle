const express = require('express');
const request = require('request');

const router = express.Router();

const name = require('../../package.json').name;
const version = require('../../package.json').version;

router.get('/', (req, res, next) => {
  const options = {
    url: 'http://api.football-data.org/v1/competitions/440',
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_ORG_API_TOKEN,
    },
  };

  request(options, (error, response, body) => {
    const model = { title: `${name} v${version}` };
    if (!error && response.statusCode === 200) {
      model.body = JSON.stringify(JSON.parse(body), null, 2);
    }
    res.render('index', model);
  });
});

module.exports = router;
