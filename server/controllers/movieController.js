const movieModel = require("../models/movieModel.js");
const apiHelpers = require("../helpers/apiHelpers.js");
const db = require("../../db/sql");
const Promise = require("bluebird");

db.query = Promise.promisify(db.query);

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
  },

  saveMovie: moviename => {
    console.log("here");
    return db.query(`INSERT INTO FAVORITES(moviename) VALUES("${moviename}")`);
  },
  deleteMovie: moviename => {
    return db.query(`DELETE FROM FAVORITES WHERE moviename='${moviename}'`);
  }
};
