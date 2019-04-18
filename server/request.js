const { Stock, User } = require('../database/Stock.js');

module.exports.findStock = (ticker) => {
  const upperCaseParams = ticker.toUpperCase();
  return Stock.find({ symbol: upperCaseParams }, (err, data) => {
    if (err) {
      console.log('ERRR', err);
    } else {
      return data;
    }
  });
};

module.exports.findUser = (userId) => {
  return User.find({ userId }, (err, data) => {
    if (err) {
      console.log('ERRR', err);
    } else {
      return data;
    }
  });
};
