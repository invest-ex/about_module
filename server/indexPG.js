const pgp = require('pg-promise')(/* options */);
const { user, password } = require('./postgresLogin.js');

const db = pgp(`postgres://${user}:${password}@localhost:5432/aboutmodule`);


module.exports.findDeleteStock = (request, inputTicker) => {
  const ticker = inputTicker.toUpperCase();
  const stringRequest = `${request} * FROM stocks where symbol = $1`;
  return db.any(stringRequest, [ticker]);
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
