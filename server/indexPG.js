var pgp = require('pg-promise')(/* options */);
var { user, password } = require('../database/postgresLogin.js');
var db = pgp(`postgres://${user}:${password}@localhost:5432/test`);

// console.time('postgres');
// db.any('SELECT * FROM testConnection', [true])
//     .then(function(data) {
//         console.timeEnd('postgres');
//     })
//     .catch(function(error) {
//         // error;
//     });
