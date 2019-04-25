drop database if exists aboutmodule2;
create database aboutmodule2;

\connect aboutmodule2;

\timing

create table stocks(                                                                                       
symbol text primary key,                                                                               
ceo text not null,
employees integer not null,
hqc text not null,
hqs text not null,
founded integer not null,
mc float8 not null,
per text not null,
description text not null,
high text not null,
low text not null,
open float8 not null,
volume text not null,
yearhigh float8 not null,
yearlow float8 not null);

copy stocks (symbol, ceo, employees, hqc, hqs,founded, mc, per, 
description, high, low, open, volume, yearhigh, yearlow) 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/stocksNoTags.csv' delimiter '|' csv header;

create table tags(                                                          
symbol varchar(10) references stocks(symbol),
tag0 varchar(30) not null,
tag1 varchar(30) not null,
tag2 varchar(30) not null,
tag3 varchar(30) not null,
tag4 varchar(30) not null,
tag5 varchar(30) not null,
tag6 varchar(30) not null,
primary key (symbol));

copy tags (symbol, tag0, tag1, tag2, tag3, tag4, tag5,tag6)                 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/tags.csv' delimiter '|' csv header;

