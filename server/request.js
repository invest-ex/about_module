const Stock = require('../database/Stock.js');

module.exports.findStock = (params) => {
  const upperCaseParams = params.symbol.toUpperCase();
  return Stock.find({ symbol: upperCaseParams }, (err, data) => {
    if (err) {
      console.log('ERRR', err);
    } else {
      return data;
    }
  });
};
