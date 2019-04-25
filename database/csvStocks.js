const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./data/stocks.csv');

console.time('stocks');

// Make tickers
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const symbols = [];

for (let first = 0; first < alphabet.length; first++) {
  let word = '';
  word += alphabet[first];
  for (let second = 0; second < alphabet.length; second++) {
    word += alphabet[second];
    for (let third = 0; third < alphabet.length; third++) {
      word += alphabet[third];
      for (let fourth = 0; fourth < alphabet.length; fourth++) {
        word += alphabet[fourth];
        for (let fifth = 0; fifth < alphabet.length; fifth++) {
          word += alphabet[fifth];
          symbols.push(word);
          word = word.slice(0, -1);
        }
        word = word.slice(0, -1);
      }
      word = word.slice(0, -1);
    }
    word = word.slice(0, -1);
  }
  word = word.slice(0, -1);
}

const MC = [
  904.63, 880.76, 478.55, 461.61, 342.84, 341.20, 327.26, 262.27, 250.40, 240.32, 222.60,
  235.50, 234.32, 228.66, 214.03, 209.07, 208.36, 199.39, 197.99, 182.09, 179.36, 157.16, 143.28,
  131.22, 127.11, 122.89, 119.90, 107.18, 106.77, 106.41, 103.09, 90.73, 87.96, 81.90, 78.92, 77.77,
  77.62, 75.37, 71.56, 71.90, 71.84, 69.91, 70.19, 22.96, 68.19, 69.39, 64.43, 59.66, 58.41, 59.33,
  56.71, 52.44, 51.96, 82.24, 50.28, 46.24, 45.81, 45.47, 43.87, 44.62, 41.69, 40.11, 40.02, 38.62,
  37.62, 37.14, 35.75, 35.46, 34.94, 34.64, 34.62, 33.75, 33.21, 32.89, 31.02, 30.21, 29.33, 27.78,
  27.01, 26.10, 25.57, 25.27, 24.84, 24.22, 22.66, 22.45, 20.98, 18.94, 18.40, 17.66, 17.35, 17.31,
  16.58, 16.20, 15.71, 15.54, 15.53, 15.43, 14.83, 14.53,
];

const collections = [
  '100 Most Popular', 'Upcoming Earnings', 'New On TradeDesk', 'Technology', 'Oil and Gas', 'Finance', 'Software Service', 'Energy', 'Manufacturing', 'Consumer Products', 'ETF', 'Video Games', 'Social Media', 'Health', 'Entertainment', 'Internet', 'Electronic',
  'Semiconductors', 'Pharmaceutical', 'Retail', 'Automotive', 'REIT', 'Banking', 'Food', 'Materials', 'Aerospace',
];

const headers = ['symbol', 'CEO', 'employees', 'HQc', 'HQs', 'founded', 'MC', 'PER', 'description', 'high', 'low', 'open', 'volume', 'yearHigh', 'yearLow', 'tags'];
file.write(`${headers.join('|')}\n`);


function generateCompanyInfo() {
  const todayHigh = faker.finance.amount(50, 300, 2);
  const collectionsArr = [];
  const newCollections = collections.slice();
  for (let j = 0; j < 7; j++) {
    const index = Math.floor(Math.random() * newCollections.length);
    collectionsArr.push(newCollections[index]);
    newCollections.splice(index, 1);
  }
  const sampleStocks = {
    CEO: faker.name.findName(),
    employees: faker.random.number({ min: 300, max: 20000 }),
    HQc: faker.address.city(),
    HQs: faker.address.state(),
    founded: faker.random.number({ min: 1880, max: 2010 }),
    MC: MC[Math.floor(Math.random() * MC.length)],
    PER: faker.finance.amount(10, 90, 2),
    description: faker.lorem.paragraphs(3),
    high: todayHigh,
    low: (parseInt(todayHigh) - 3.86),
    open: (parseInt(todayHigh) - 1.39),
    volume: faker.finance.amount(1, 40, 2),
    yearHigh: (parseInt(todayHigh) + 34.68),
    yearLow: (parseInt(todayHigh) - 28.03),
    tags: collectionsArr,
  };
  return sampleStocks;
}

function writetenMillionTimes(writer, encoding, callback) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      let companyInfo = generateCompanyInfo();
      companyInfo.symbol = symbols[i];
      let data = `${headers.map(columnName => JSON.stringify(companyInfo[columnName])).join('|')}\n`;
      data = data.replace('[', '{');
      data = data.replace(']', '}');
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

writetenMillionTimes(file, 'UTF-8', () => { console.timeEnd('stocks'); });
