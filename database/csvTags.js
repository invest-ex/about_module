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


const headers = ['symbol', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7'];
console.log(headers.join(','));

for (let i = 0; i < 10; i++) {
  const collectionsArr = [];
  const newCollections = collections.slice();
  for (let j = 0; j < 7; j++) {
    const index = Math.floor(Math.random() * newCollections.length);
    collectionsArr.push(newCollections[index]);
    newCollections.splice(index, 1);
  }
  const sampleTags = {
    symbol: symbols[i],
  };

  for (let x = 1; x <= 7; x++) {
    sampleTags[`tag${x}`] = collectionsArr[x];
  }

  const csv = headers.map(columnName => JSON.stringify(sampleTags[columnName])).join(',');
  console.log(csv);
}
