drop database if exists aboutmodule;
create database aboutmodule;

\connect aboutmodule;

\timing

create table users(
userId integer PRIMARY KEY, 
equity text not null, 
cost text not null, 
shares integer, 
tr text not null, 
pd text not null, 
av float8);

copy users (userId, equity, cost, shares, tr, pd, av) 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/data/users.csv' delimiter '|' csv header;

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
yearlow float8 not null,
tags text[7]);

copy stocks (symbol, ceo, employees, hqc, hqs,founded, mc, per, 
description, high, low, open, volume, yearhigh, yearlow, tags) 
from '/Users/MarissaShieh/Desktop/Hack Reactor/SDC/about_module/data/stocks.csv' delimiter '|' csv header;