const fs = require('fs');
const file = fs.createWriteStream('./tags.csv');

console.time('tags');

const collections = [
  '100 Most Popular', 'Upcoming Earnings', 'New On TradeDesk', 'Technology', 'Oil and Gas', 'Finance', 'Software Service', 'Energy', 'Manufacturing', 'Consumer Products', 'ETF', 'Video Games', 'Social Media', 'Health', 'Entertainment', 'Internet', 'Electronic',
  'Semiconductors', 'Pharmaceutical', 'Retail', 'Automotive', 'REIT', 'Banking', 'Food', 'Materials', 'Aerospace',
];

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


const headers = ['symbol', 'tag0', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'];
file.write(`${headers.join('|')}\n`);

function generateTagInfo() {
  const collectionsArr = [];
  const newCollections = collections.slice();
  for (let j = 0; j < 7; j++) {
    const index = Math.floor(Math.random() * newCollections.length);
    collectionsArr.push(newCollections[index]);
    newCollections.splice(index, 1);
  }
  const sampleTags = {};

  for (let x = 0; x < 7; x++) {
    sampleTags[`tag${x}`] = collectionsArr[x];
  }
  return sampleTags;
}

function writetenMillionTimes(writer, encoding, callback) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      let tagInfo = generateTagInfo();
      tagInfo.symbol = symbols[i];
      const data = `${headers.map(columnName => JSON.stringify(tagInfo[columnName])).join('|')}\n`;
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

writetenMillionTimes(file, 'UTF-8', () => { console.timeEnd('tags'); });