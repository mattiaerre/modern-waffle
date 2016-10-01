/* global document, io */

(() => {
  const fixture = document.getElementById('fixture');
  const home = fixture.getElementsByClassName('home')[0];
  const away = fixture.getElementsByClassName('away')[0];
  const odds = fixture.getElementsByClassName('odds')[0];

  const socket = io('//modern-waffle.herokuapp.com/');
  socket.on('server:fixture', (message) => {
    console.log('now:', Date.now());

    const data = JSON.parse(message);
    fixture.getElementsByClassName('status')[0].innerHTML = data.status;

    home.getElementsByClassName('team-name')[0].innerHTML = data.homeTeamName;
    home.getElementsByClassName('goals')[0].innerHTML = data.result.goalsHomeTeam || 0;

    away.getElementsByClassName('team-name')[0].innerHTML = data.awayTeamName;
    away.getElementsByClassName('goals')[0].innerHTML = data.result.goalsAwayTeam || 0;

    odds.getElementsByClassName('home-win')[0].innerHTML = data.odds.homeWin || 0.00;
    odds.getElementsByClassName('draw')[0].innerHTML = data.odds.draw || 0.00;
    odds.getElementsByClassName('away-win')[0].innerHTML = data.odds.awayWin || 0.00;
  });
})();
