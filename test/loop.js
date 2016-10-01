const request = require('request');

setInterval(() => {
  // const id = 150777;
  const id = 150777;
  request(`http://modern-waffle.herokuapp.com/fixture?id=${id}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  });
}, 10000);
