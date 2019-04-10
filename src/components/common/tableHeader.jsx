import React, { Component } from "react";
import PropTypes from "prop-types";

class TableHeader extends Component {
  raiseSort = path => {
    if (!path) return null;
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    if (!column.path) return null;
    const { sortColumn } = this.props;
    let sortClasses = "fa fa-sort-";
    if (column.path === sortColumn.path) {
      sortClasses += sortColumn.order;
    } else {
      return null;
    }

    return <i className={sortClasses} aria-hidden="true" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={this.props.columns.indexOf(column)}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object,
  onSort: PropTypes.func
};

export default TableHeader;
