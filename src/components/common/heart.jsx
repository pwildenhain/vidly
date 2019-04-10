import React from "react";
import PropTypes from "prop-types";

const Heart = ({ liked, toggleHeart }) => {
  let heartClasses = "fa fa-heart";
  if (!liked) heartClasses += "-o";
  return (
    <i
      className={heartClasses}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={toggleHeart}
    />
  );
};

Heart.propTypes = {
  liked: PropTypes.bool,
  toggleHeart: PropTypes.func.isRequired
};

export default Heart;
