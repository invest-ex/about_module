const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  require('newrelic');
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
  app.use('/stocks/:ticker', express.static(path.join(__dirname, '../client/dist')));

  // COMPANY INFO ENDPOINTS
  app.get('/api/about/:symbol', (req, res) => {
    request.findDeleteStock('SELECT', req.params.symbol)
      .then(data => res.send(data))
      .catch(() => res.sendStatus(404));
  });

  app.delete('/api/about/:symbol', (req, res) => {
    request.findDeleteStock('DELETE', req.params.symbol)
      .then(count => res.send(count))
      .catch(() => res.sendStatus(404));
  });

  app.post('/api/about/', (req, res) => {
    request.postStock(req.body)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(400));
  });

  // app.put('/api/about/:symbol', (req, res) => {
  //   request.findStock('REPLACE', req.params.symbol).then(data => res.send(data));
  // });


  // USER INFO ENDPOINTS
  app.get('/api/users/:userId', (req, res) => {
    request.findDeleteUser('SELECT', req.params.userId)
      .then(data => res.send(data))
      .catch(() => res.sendStatus(404));
  });

  app.delete('/api/users/:userId', (req, res) => {
    request.findDeleteUser('DELETE', req.params.userId)
      .then(count => res.send(count))
      .catch(() => res.sendStatus(404));
  });

  app.post('/api/users/', (req, res) => {
    request.postUser(req.body)
      .then(data => res.send(data))
      .catch(() => res.sendStatus(400));
  });

  // app.put('/api/user/:userId', (req, res) => {
  //   request.findUser(req.params.userId).then(data => res.send(data));
  // });
  console.log(`Worker ${process.pid} started`);
}
