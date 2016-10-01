const request = require('request');

setInterval(() => {
  const id = 150781;
  request(`http://127.0.0.1:3000/fixture?id=${id}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  });
}, 10000);

