import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map(movie => {
          let defaultImageUrl =
            "https://image.tmdb.org/t/p/w1280/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg";
          let movieUrl = "http://image.tmdb.org/t/p/w185/" + movie.poster_path;
          movieUrl = movie.poster_path === null ? defaultImageUrl : movieUrl;

          //let movieOverview = movie.overview.slice(0, 20);
          //onclick switches between save and delete depending on whether the previous showfavorite state is false or true
          return (
            <li
              className="movie_item"
              onClick={() => this.props.handler(movie)}
            >
              <img src={movieUrl} />
              <div className="movie_description">
                <h2>{movie.overview}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Release Date</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.popularity}</span>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;
