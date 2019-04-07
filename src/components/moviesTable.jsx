import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Heart from "./common/heart";
import PropTypes from "prop-types";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberinStock", label: "Number in Stock" },
    { path: "dailyRentalRate", label: "Daily Rental Rate" },
    {},
    {}
  ];

  render() {
    const { movies, sortColumn, onToggleHeart, onDelete, onSort } = this.props;
    return (
      <table className="table thead-dark">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
                  toggleHeart={() => onToggleHeart(movie)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onToggleHeart: PropTypes.func,
  onDelete: PropTypes.func,
  onSort: PropTypes.func
};

export default MoviesTable;
