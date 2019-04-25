var pgp = require('pg-promise')(/* options */);
var { user, password } = require('./postgresLogin.js');
var db = pgp(`postgres://${user}:${password}@localhost:5432/aboutmodule`);


let findStock = function(inputTicker) {
  const ticker = inputTicker.toUpperCase();
  console.time('postgres');
  console.log('here');
  db.any('SELECT * FROM stocks where symbol = $1', [ticker])
      .then(function(data) {
        console.log(data);
          console.timeEnd('postgres');
      })
      .catch(function(error) {
          // error;
      });
};

findStock('aaaaa');
