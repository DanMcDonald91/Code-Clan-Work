DROP TABLE IF EXISTS bounties;

CREATE TABLE bounties(
  id SERIAL8 primary key,
name VARCHAR(255) not null,
species VARCHAR(255) not null,
homeworld VARCHAR(255) not null,
cashed_in BOOLEAN not null

);