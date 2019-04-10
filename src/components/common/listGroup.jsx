import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
  options,
  keyProperty,
  textProperty,
  selectedOption,
  onSelectOption
}) => {
  return (
    <ul className="list-group">
      {options.map(option => (
        <button
          className={
            option[textProperty] === selectedOption[textProperty]
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onSelectOption(option)}
          style={{ cursor: "pointer" }}
          key={option[keyProperty]}
        >
          {option[textProperty]}
        </button>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  keyProperty: "_id",
  textProperty: "name",
  selectedOption: {}
};

ListGroup.propTypes = {
  options: PropTypes.array.isRequired,
  keyProperty: PropTypes.string.isRequired,
  textProperty: PropTypes.string.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  selectedOption: PropTypes.object
};

export default ListGroup;
