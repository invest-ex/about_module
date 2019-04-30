\connect aboutmodule;

\timing

drop table users;

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
