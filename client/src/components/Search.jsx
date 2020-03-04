import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenre: null
    };
    this.getGenres = this.getGenres.bind(this);
    this.setGenre = this.setGenre.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    axios.get("/genres").then(res => {
      this.setState({ genres: res.data });
      console.log(this.state.genres);
    });

    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  setGenre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.setGenre}>
          {this.state.genres.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />

        <button onClick={() => this.props.getMovies(this.state.selectedGenre)}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
