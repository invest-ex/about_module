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

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'))
// });
// app.get('/stocks/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'))
// });

// app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:ticker', express.static(path.join(__dirname, '../client/dist')));

// COMPANY INFO ENDPOINTS
app.get('/api/about/:symbol', (req, res) => {
  request.findDeleteStock('SELECT', req.params.symbol)
    .then(data => res.send(data))
    .catch(() => res.sendStatus(404));
});

// app.delete('/api/about/:symbol', (req, res) => {
//   request.findDeleteStock('DELETE', req.params.symbol)
//     .then(data => res.send(data))
//     .catch(() => res.sendStatus(404));
// });

// app.post('/api/about/:symbol', (req, res) => {
//   request.findStock(req.params.symbol).then(data => res.send(data));
// });

// app.put('/api/about/:symbol', (req, res) => {
//   request.findStock('REPLACE', req.params.symbol).then(data => res.send(data));
// });


// USER INFO ENDPOINTS
app.get('/api/users/:userId', (req, res) => {
  request.findDeleteUser('SELECT', req.params.userId)
    .then(data => {
      // console.log((data.equity).split(''));
      // console.log(data.shares);
      // console.log(data);
      // var test = [{
      //   userid: 32,
      //   equity: "23.45",
      //   cost: "37.54",
      //   shares: 59,
      //   tr: "456.21",
      //   pd: "22.7",
      //   av: 3.47
      // }]
      return res.send(data)})
    .catch(() => res.sendStatus(404));
});

// app.post('/api/user/:userId', (req, res) => {
//   request.findUser(req.params.userId).then(data => res.send(data));
// });

// app.put('/api/user/:userId', (req, res) => {
//   request.findUser(req.params.userId).then(data => res.send(data));
// });

// app.delete('/api/user/:userId', (req, res) => {
//   request.findUser(req.params.userId).then(data => res.send(data));
// });
