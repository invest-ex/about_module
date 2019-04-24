DROP KEYSPACE IF EXISTS aboutmodule;
CREATE KEYSPACE aboutmodule WITH REPLICATION  = {'class': 'SimpleStrategy', 'replication_factor': 3};

use aboutmodule;

CREATE TABLE users(
  userId int PRIMARY KEY,
  equity text,
  cost text,
  shares int,
  tr text,
  pd text,
  av float);

copy users(userId,equity,cost,shares,TR,PD,AV) 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/users.csv' with delimiter='|' and HEADER=TRUE;


CREATE TABLE stocks(
  symbol text PRIMARY KEY, 
  ceo text, 
  employees int, 
  hqc text, 
  hqs text, 
  founded int, 
  mc float, 
  per text, 
  description text, 
  high text, 
  low float, 
  open float, 
  volume text, 
  yearhigh float, 
  yearlow float, 
  tags set<text>);

COPY stocks(symbol, ceo, employees, hqc, hqs, founded, MC, PER, description, high,
low, open, volume, yearHigh, yearLow, tags) 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/stocks.csv' with delimiter='|' and HEADER=TRUE;

