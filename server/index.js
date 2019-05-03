require('newrelic');
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
  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const compression = require('compression');
  const request = require('./indexPG.js');
  const redis = require('redis');

  const client = redis.createClient({
    port: 6379,
    host: '172.31.21.10', 
  });
  
  const app = express();
  const port = 3003;

  client.on('error', (err) => {
    console.log('Error connecting to Redis ', err);
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(compression());

  app.listen(port, () => console.log(`APP IS LISTENING ON ${port}`));

  app.use('/', express.static(path.join(__dirname, '../client/dist')));
  app.use('/stocks/:ticker', express.static(path.join(__dirname, '../client/dist')));
  app.get('/loaderio-09abdb181b8d6b079fdb1668400c671d.txt', (req, res) => {
    res.sendFile('/home/ec2-user/about_module/server/loaderio-09abdb181b8d6b079fdb1668400c671d.txt');
  });
  app.get('/loaderInfo', (req, res) => {
    res.sendFile('/home/ec2-user/about_module/server/loader.json');
  });


  // COMPANY INFO ENDPOINTS
  app.get('/api/about/:symbol', (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    client.mget(symbol, (err, result) => {
     if (err) {
        console.log(err);
      }
      if (result[0] !== null) {
        res.send(result[0]);
     } else {
        request.findDeleteStock('SELECT', symbol)
        .then(data => {
          client.mset(symbol, JSON.stringify(data))
          res.send(data)})
        .catch((error) => {
       	console.log(error);
	return res.sendStatus(404);
	});
      }
    });
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
    const userId = req.params.userId;
    client.mget(userId, (err, result) => {
      if (result[0] !== null) {
        res.send(result[0]);
      } else {
        request.findDeleteUser('SELECT', userId)
        .then(data => {
          client.mset(userId, JSON.stringify(data))
          res.send(data)})
        .catch(() => res.sendStatus(404));
      }
    });
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
