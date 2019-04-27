import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "./common/heart";
import Table from "./common/table";
import PropTypes from "prop-types";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Number in Stock" },
    { path: "dailyRentalRate", label: "Daily Rental Rate" },
    {
      key: "heart",
      content: movie => (
        <Heart
          liked={movie.liked}
          toggleHeart={() => this.props.onToggleHeart(movie)}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  sortColumn: PropTypes.object,
  onToggleHeart: PropTypes.func,
  onDelete: PropTypes.func,
  onSort: PropTypes.func
};

export default MoviesTable;
