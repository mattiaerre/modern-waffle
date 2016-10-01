const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', (req, res, next) => {
  const id = req.query.id; // e.g.: 150781

  const options = {
    url: `http://api.football-data.org/v1/fixtures/${id}`,
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_ORG_API_TOKEN,
    },
  };

  request(options, (error, response, body) => {
    let fixture = {};
    if (!error && response.statusCode === 200) {
      fixture = JSON.stringify(JSON.parse(body).fixture, null, 2);
    }
    res.io.emit('server:fixture', fixture);
    res.send({ message: `fixture ${id} has been published` });
  });
});

module.exports = router;
