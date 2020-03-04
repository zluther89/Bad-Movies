const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

// write out logic/functions required to query TheMovieDB.org

let searchWorstMoviesByGenreId = genreID => {
  //makes an axios get request to the worst rated movies, by genre id

  //NOTE: RETURN AXIOS FOR PROMISE
  return axios({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`,
    method: "get"
  });
};

let searchMovieGenres = () => {
  return axios({
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    method: "get"
  });
};

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {
  searchWorstMoviesByGenreId: searchWorstMoviesByGenreId,
  searchMovieGenres: searchMovieGenres
};
