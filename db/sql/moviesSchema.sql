-- SET UP SCHEMA HERE

DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites(
    id integer auto_increment PRIMARY KEY,
    title varchar(1000) UNIQUE,
    release_date varchar(1000),
    vote_average integer,
    overview varchar(1000),
    poster_path varchar(1000)
);