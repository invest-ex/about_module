DROP KEYSPACE IF EXISTS aboutmodule2;
CREATE KEYSPACE aboutmodule2 WITH REPLICATION  = {'class': 'SimpleStrategy', 'replication_factor': 3};

use aboutmodule2;

CREATE TABLE stocks(
  part text,
  symbol text, 
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
  tags set<text>,
  PRIMARY KEY (part, symbol)
  );

COPY stocks(part, symbol, ceo, employees, hqc, hqs, founded, MC, PER, description, high,
low, open, volume, yearHigh, yearLow, tags) 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/stocks2.csv' with delimiter='|' and HEADER=TRUE;

