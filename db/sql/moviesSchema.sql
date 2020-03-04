-- SET UP SCHEMA HERE

DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites(
    id integer auto_increment PRIMARY KEY,
    moviename varchar(200)
);