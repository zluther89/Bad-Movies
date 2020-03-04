const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

// write out logic/functions required to query TheMovieDB.org

let searchMovies = function() {
  let options = {
    //
  };
  //how to make api request... key d8c38afbc21d549e81fd17fbd3b8a1c2

  axios({
    url: null, //some url,
    method: "get",
    headers: options
  });
};

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = searchMovies;
