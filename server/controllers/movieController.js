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

  saveMovie: movie => {
    let { title, release_date, vote_average, overview, poster_path } = movie;
    return db.query(
      `INSERT INTO FAVORITES(title, release_date, vote_average, overview, poster_path) VALUES("${title}", "${release_date}", "${vote_average}", "${overview}", "${poster_path}")`
    );
  },
  deleteMovie: movie => {
    let { title } = movie;
    return db.query(`DELETE FROM FAVORITES WHERE title='${title}'`);
  },

  returnFavorites: () => {
    return db.query(`SELECT * FROM favorites`);
  }
};

// popularity: 1.72
// id: 460571
// video: false
// vote_count: 5
// vote_average: 0
// title: "That Good Night"
// release_date: "2018-05-05"
// original_language: "en"
// original_title: "That Good Night"
// genre_ids: [18]
// backdrop_path: "/r3advwquUpxSSVysAl2tUW0M0MM.jpg"
// adult: false
// overview: "A moving and memorable family drama about a terminally ill writer who wants to be reconciled with his long-abandoned son."
// poster_path: "/4URg3uF4wI2kikL9CYgBRApEU6A.jpg"
