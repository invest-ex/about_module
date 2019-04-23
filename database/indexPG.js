var pgp = require('pg-promise');
var { user, password } = require('./postgresLogin.js');
var db = pgp(`postgres://${user}:${password}@localhost:5432/aboutModule`);

// db.
