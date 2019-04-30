console.log('stock');

// Make tickers
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUV'.split('');
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

//create ticker list!
const checker = {};

function generatePopular() {
  const popular = [];
  while (popular.length < 100) {
    const num = Math.floor(Math.random() * symbols.length);
    const chosenTicker = symbols[num];
    if (!checker[chosenTicker]) {
      popular.push(chosenTicker);
      checker[chosenTicker] = true;
    }
  }
  return popular;
}

function generateMiddle() {
  const middle = [];
  while (middle.length < 300) {
    const num = Math.floor(Math.random() * symbols.length);
    const chosenTicker = symbols[num];
    if (!checker[chosenTicker]) {
      middle.push(chosenTicker);
      checker[chosenTicker] = true;
    }
  }
  return middle;
}

const testStocks = [];
function generateStocks () {
  const popular = generatePopular();
  const middle = generateMiddle();
  const all = symbols;

  for (let i = 0; i < 1000; i++) {
    const chosen = Math.random();
    if (chosen <= 0.5) {
      const tickerSpot = Math.floor(Math.random() * popular.length);
      testStocks.push(JSON.stringify(popular[tickerSpot]));
    } else if (chosen <= 0.8) {
      const tickerSpot = Math.floor(Math.random() * middle.length);
      testStocks.push(JSON.stringify(middle[tickerSpot]));
    } else {
      const tickerSpot = Math.floor(Math.random() * all.length);
      testStocks.push(JSON.stringify(all[tickerSpot]));
    }
  }
}
generateStocks();

export default testStocks;
