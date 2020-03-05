-- SET UP SCHEMA HERE

DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites(
    id integer auto_increment PRIMARY KEY,
    title varchar(200) UNIQUE,
    release_date varchar(200),
    vote_average integer,
    poster_path varchar(200)
);