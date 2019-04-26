const pgp = require('pg-promise')(/* options */);
const { user, password } = require('./postgresLogin.js');

const db = pgp(`postgres://${user}:${password}@localhost:5432/aboutmodule`);


module.exports.findDeleteStock = (request, inputTicker) => {
  const ticker = inputTicker.toUpperCase();
  const stringRequest = `${request} * FROM stocks where symbol = $1`;
  return db.any(stringRequest, [ticker]);
};

module.exports.postStock = (stock) => {
  return db.none('INSERT INTO stocks(symbol,ceo,employees,hqc,hqs,founded,mc,per,description,high,low,open,volume,yearhigh,yearlow,tags) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)', [
    stock.symbol, stock.ceo, stock.employees, stock.hqc, stock.hqs, stock.founded,
    stock.mc, stock.per, stock.description, stock.high, stock.low, stock.open,
    stock.volume, stock.yearhigh, stock.yearlow, stock.tags]);
};

// module.exports.putStock = (inputTicker, callback) => {
//   const ticker = inputTicker.toUpperCase();
//   console.time('delete stock');
//   return db.one('REPLACE * FROM stocks where symbol = $1', [ticker])
//     .then((data) => {
//       console.log(data);
//       console.timeEnd('delete stock');
//       callback(data);
//     })
//     .catch((error) => {
//       console.error(error); //TURN INTO RES.SENDSTATUS(404)
//     });
// };

module.exports.findDeleteUser = (request, userId) => {
  const stringRequest = `${request} * FROM users where userId = $1`;
  return db.any(stringRequest, [Number(userId)]);
};

module.exports.postUser = (newUser) => {
  return db.none('INSERT INTO users (userid, equity, cost, shares, tr, pd, av) values ($1,$2,$3,$4,$5,$6,$7)',
  [newUser.userid, newUser.equity, newUser.cost, newUser.shares, newUser.tr, newUser.pd, newUser.av]);
};
