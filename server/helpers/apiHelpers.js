const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

// write out logic/functions required to query TheMovieDB.org

let searchWorstMoviesByGenreId = genreID => {
  let options = {
    //
  };

  //makes an axios get request to the worst rated movies, by genre id
  axios({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=d8c38afbc21d549e81fd17fbd3b8a1c2&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`,
    method: "get"
  }).then(res => console.log(res.data));
};

searchWorstMoviesByGenreId("28"); // A TEST CALL TO BE REMOVED
// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = searchWorstMoviesByGenreId;
