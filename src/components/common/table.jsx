import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = props => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table thead-dark">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  sortColumn: PropTypes.object,
  onSort: PropTypes.func
};

export default Table;
