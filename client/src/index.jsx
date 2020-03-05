import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ deway: "movies" }],
      favorites: [{ deway: "favorites" }],
      showFaves: false
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);

    // you might have to do something important here!
  }

  componentDidMount() {
    this.getMovies("28");
    this.getFavorites().then(() => console.log(this.state.favorites));
  }

  getMovies(genreID) {
    axios
      .get("/search", {
        params: {
          genreID: genreID
        }
      })
      .then(res => {
        this.setState({ movies: res.data });
        console.log(this.state.movies);
      });
    // make an axios request to your server on the GET SEARCH endpoint
  }

  saveMovie(movie) {
    console.log("saved");
    axios
      .post("/save", movie)
      .then(() => console.log("saved movie to favorites"))
      .catch(err => console.log(err));
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  getFavorites() {
    return axios
      .post("/favorites")
      .then(res => {
        console.log("favorties", res.data);
        this.setState({ favorites: res.data });
        console.log("state favorites", this.state.favorites);
      })
      .catch(err => console.log(err));
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            save={this.saveMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
