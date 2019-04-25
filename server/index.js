const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const request = require('./indexPG.js');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.listen(port, () => console.log(`APP IS LISTENING ON ${port}`));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/*', express.static(path.join(__dirname, '../client/dist')));

// COMPANY INFO ENDPOINTS
app.get('/api/about/:symbol', (req, res) => {
  request.findStock(req.params.symbol).then(data => res.send(data));
});

app.post('/api/about/:symbol', (req, res) => {
  request.findStock(req.params.symbol).then(data => res.send(data));
});

app.put('/api/about/:symbol', (req, res) => {
  request.findStock(req.params.symbol).then(data => res.send(data));
});

app.delete('/api/about/:symbol', (req, res) => {
  request.findStock(req.params.symbol).then(data => res.send(data));
});


// USER INFO ENDPOINTS
app.get('/api/user/:userId', (req, res) => {
  request.findUser(req.params.userId).then(data => res.send(data));
});

app.post('/api/user/:userId', (req, res) => {
  request.findUser(req.params.userId).then(data => res.send(data));
});

app.put('/api/user/:userId', (req, res) => {
  request.findUser(req.params.userId).then(data => res.send(data));
});

app.delete('/api/user/:userId', (req, res) => {
  request.findUser(req.params.userId).then(data => res.send(data));
});
