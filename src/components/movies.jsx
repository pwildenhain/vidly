import React, { Component } from "react";
import Heart from "./common/heart";
import Pagination from "./common/pagination"  
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: [],
    perPage: 4
  };

  componentWillMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleHeart = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked
    this.setState({movies})
  }

  handlePageChange = page => {
    console.log('Page Changed: ', page)
  }

  // zen coding shortcut to create a table with heading, and 4 columns: //table.table>thead>tr>th*4
  // can even just simply do td*4 to generate 4 <td /> tags

  render() {
    const { length: movie_count } = this.state.movies;
    if (movie_count === 0) {
      return <p>There are no movies in the database</p>;
    }

    return (
      <React.Fragment>
        <p>Showing {movie_count} movies in the database</p>
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
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Heart liked={movie.liked} toggleHeart={() => this.handleHeart(movie)} /></td>
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
          totalItems={movie_count} 
          perPage={this.state.perPage} 
          onPageChange={this.handlePageChange}/>
      </React.Fragment>
    );
  }
}

export default Movies;
