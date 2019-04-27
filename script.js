import http from "k6/http";
import { check } from "k6";
export const options = {
  vus: 100,
  duration: "5m"
}; //makes 100 users constantly making requests, run for 5 minutes

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

function generatePopular() {
  const popular = [];
  while (popular.length < 100) {
    const num = Math.floor(Math.random() * symbols.length);
    const chosenTicker = symbols[num];
    popular.push(chosenTicker);
  }
  return popular;
}
const popularStocks = generatePopular();

export default function () {
  const random = Math.random();
  let ticker;
  if (random <= 0.3) {
    ticker = popularStocks[Math.floor(Math.random() * popularStocks.length)];
  } else {
    ticker = symbols[Math.floor(Math.random() * symbols.length)];
  }

  let res = http.get(`http://localhost:3003/api/about/${ticker}`);
  check(res, {
    "status was 200": (r) => r.status ==200,
  });
}
