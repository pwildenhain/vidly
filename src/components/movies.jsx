import React, { Component } from "react";
import Heart from "./common/heart";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    perPage: 4,
    currentPage: 1
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies, genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleHeart = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  // zen coding shortcut to create a table with heading, and 4 columns: //table.table>thead>tr>th*4
  // can even just simply do td*4 to generate 4 <td /> tags

  render() {
    const { length: movie_count } = this.state.movies;
    const {
      perPage,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre
    } = this.state;
    if (movie_count === 0) {
      return <p>There are no movies in the database</p>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, perPage);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            options={genres}
            selectedOption={selectedGenre}
            onSelectOption={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database</p>
          <table className="table thead-dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Heart
                      liked={movie.liked}
                      toggleHeart={() => this.handleHeart(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalItems={filtered.length}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
