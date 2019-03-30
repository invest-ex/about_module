const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema ({
  symbol: String,
  equity: Number,
  cost: Number,
  shares: Number,
  TR: Number,
  PD: Number,
  CEO: String,
  employees: Number,
  HQ: String,
  founded: Number,
  MC: Number,
  PER: Number,
  AV: Number,
  description: String,
  high: Number,
  low: Number,
  open: Number,
  volume: Number,
  yearHigh: Number,
  yearLow: Number,
  tag1: String,
  tag2: String,
  tag3: String,
  tag4: String,
  tag5: String,
  tag6: String,
  tag7: String
});

const Stock = mongoose.model('stock',stockSchema);

module.exports = Stock;